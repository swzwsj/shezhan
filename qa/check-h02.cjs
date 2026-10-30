const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const story = require('../dist/assets/h02-story.js');
const root = path.resolve(__dirname, '..');
const rules = { maxDistance: 8, heartPanicThreshold: 75 };
assert.equal(story.scenario.sourceVersion, 'edf045ff-12d3-4c71-8020-88aa78204d89');
assert.equal(story.scenario.playerName, '陆星河');
assert.equal(story.scenario.characterName, '程严');
assert.deepEqual(story.scenario.stages.map(s => s.threshold), [1, 3, 5]);
assert.equal(story.scenario.stages[2].lines[0].text, '昨晚在水里那场较量，是记不得，还是不方便在这儿说？');
assert.deepEqual(story.crossedStages(-3, 0, new Set()), []);
assert.deepEqual(story.crossedStages(0, 3, new Set()).map(s => s.threshold), [1, 3]);
const played = new Set(story.crossedStages(0, 3, new Set()).map(s => s.id));
assert.deepEqual(story.crossedStages(-2, 3, played), [], 'Repeated crossings must not replay dialogue');
assert.deepEqual(story.crossedStages(2, 5, played).map(s => s.threshold), [5]);
assert.deepEqual(story.crossedStages(5, 8, played), [], 'No future dialogue added after final threshold');
for (const [state, expected] of [
  [{ distance: 0, heartRate: 22, gazeAversion: 0 }, 'idle'],
  [{ distance: 0, heartRate: 74, gazeAversion: 1 }, 'flustered'],
  [{ distance: 2, heartRate: 22, gazeAversion: 0 }, 'flustered'],
  [{ distance: -8, heartRate: 80, gazeAversion: 0 }, 'overload'],
  [{ distance: 0, heartRate: 75, gazeAversion: 0 }, 'overload'],
  [{ distance: 8, heartRate: 100, gazeAversion: 1 }, 'defeated'],
  [{ distance: 1, heartRate: 74, gazeAversion: 0 }, 'idle'],
]) assert.equal(story.emotionalState(state, rules), expected);
assert(story.scenario.outcomes.win.lines.some(l => l.text === '至于昨晚那个道歉，我还记着。'));
assert(story.scenario.outcomes.lose.lines.some(l => l.text === '车都到了，我哪敢耽误程总。'));
assert(story.scenario.outcomes.draw.lines.some(l => l.text === '程总一句都没正面答，我怎么算问完。'));
assert(story.scenario.commonExit.some(l => l.hideOpponent));
const customHeroine = { ...story.scenario, playerSprite: 'assets/character-pink.png' };
for (const expression of ['idle', 'playful', 'intent']) {
  assert.equal(story.playerSpriteFor(customHeroine, expression), 'assets/character-pink.png', 'Manual replacement must survive expression transitions');
  assert.equal(story.playerSpriteFor({ ...story.scenario, background: 'custom-background.png' }, expression), story.scenario.playerSprites[expression], 'Saving background alone must preserve authored variants');
}
for (const asset of [story.scenario.background, ...Object.values(story.scenario.playerSprites), ...Object.values(story.scenario.sprites)]) {
  assert(fs.existsSync(path.join(root, 'dist', asset)), `Missing art: ${asset}`);
}

// Exercise the actual page's queue code, including hand lock and stale-epoch guard.
const html = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8');
const source = html.slice(html.indexOf('    function playStoryQueue('), html.indexOf('    function renderPlayerHeroineSVG('));
const elements = new Map();
function element(id) {
  if (!elements.has(id)) elements.set(id, { hidden: false, textContent: '', dataset: {}, addEventListener(type, fn) { this[type] = fn; }, focus() {} });
  return elements.get(id);
}
let intervalCleared = 0, handRenders = 0, countdownStarts = 0;
const context = vm.createContext({
  document: { getElementById: element, activeElement: null, querySelector: () => ({ focus() {} }) },
  H02Story: story, clearInterval: () => intervalCleared++,
  renderPlayerHand: () => handRenders++, updateCinematicHUD() {},
  renderActorFrame() {}, startCountdown: () => countdownStarts++,
  setSubtitleSpeaker: (side, name, text) => { element('cinematicSubtitleText').textContent = text; },
  setActiveActorSpotlight() {},
});
vm.runInContext(`let matchEpoch = 1, turnTimer = 99, isInteracting = false, storyQueue = [], storyQueueDone = null;
let currentScenarioId = 'scenario_h02', heroineExpression = 'idle', pendingH02Finish = null, playedStoryStages = new Set();
let GAME_CONFIG = { scenarios: { scenario_h02: H02Story.scenario } };
${source}
this.qaQueue = { playStoryQueue, playTriggeredStages, state: () => ({ isInteracting, heroineExpression, epoch: matchEpoch }), invalidate: () => matchEpoch++ };`, context);
let resumed = 0;
context.qaQueue.playStoryQueue(story.scenario.stages[0].lines, '职业称呼', () => resumed++);
assert.equal(context.qaQueue.state().isInteracting, true);
assert.equal(intervalCleared, 1);
assert.equal(handRenders, 1);
assert.equal(countdownStarts, 0);
assert.equal(element('timerText').textContent, '暂停');
assert.equal(element('cinematicSubtitleText').textContent, story.scenario.stages[0].lines[0].text);
element('advanceDialogueBtn').click();
assert.equal(resumed, 0);
element('advanceDialogueBtn').click();
assert.equal(resumed, 0, 'Reaction line must be readable before handing play back');
element('advanceDialogueBtn').click();
assert.equal(resumed, 1);
assert.equal(element('mainGameStage').dataset.dialogue, 'false');
context.qaQueue.playStoryQueue(story.scenario.stages[0].lines, '职业称呼', () => resumed++);
context.qaQueue.invalidate();
for (let i = 0; i < 3; i++) element('advanceDialogueBtn').click();
assert.equal(resumed, 1, 'An old conversation may not resume a newly reset game');
console.log(JSON.stringify({ sourceVersion: story.scenario.sourceVersion, stageThresholds: [1, 3, 5], sprites: 7, queuePauseAndEpochGuard: 'passed', emotionPriority: 'passed', threeOutcomesAndCommonExit: 'passed' }, null, 2));
