const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8');
const configMatch = html.match(/let GAME_CONFIG = ([\s\S]*?\n    });/);
assert(configMatch, 'Live configuration must be readable');
const config = JSON.parse(JSON.stringify(vm.runInNewContext('(' + configMatch[1] + ')')));
const api = require('../dist/assets/duel-rules.js');
api.validateRules(config.rules);
assert.equal(config.rules.maxRounds, 10);
const ordinary = [];
for (const affinity of Object.keys(config.affinities)) for (let value = 1; value <= 9; value++) ordinary.push({ affinity, value, isSpecial: false });
let checked = 0;
for (const player of ordinary) for (const opponent of ordinary) {
  const r = api.resolveRound(player, opponent, config.rules, config.affinities);
  const winning = r.winner === 'PLAYER' ? player : opponent;
  const losing = r.winner === 'PLAYER' ? opponent : player;
  const mustCrush = r.winner !== null && config.affinities[winning.affinity].counters === losing.affinity && winning.value - losing.value >= config.rules.crushGap;
  assert.equal(r.isCrush, mustCrush);
  assert.equal(r.damage, r.winner === null ? 0 : mustCrush ? 3 : 1);
  assert.equal(Math.abs(r.distDelta), r.damage);
  if (r.winner === 'PLAYER') assert(r.distDelta > 0);
  if (r.winner === 'OPPONENT') assert(r.distDelta < 0);
  if (player.affinity === opponent.affinity && player.value === opponent.value) assert.equal(r.outcome, 'DRAW');
  checked++;
}
for (const special of config.specialCards) for (const opponent of ordinary) {
  const r = api.resolveRound(special, opponent, config.rules, config.affinities);
  assert.equal(r.isCrush, false);
  assert.equal(r.damage, special.effectType === 'IMMUNE_AND_HEART' ? 0 : 1);
}
for (let round = 0; round < 10; round++) assert.equal(api.getFinish(0, round, config.rules), null);
assert.equal(api.getFinish(0, 10, config.rules).winner, 'DRAW');
assert.equal(api.getFinish(1, 10, config.rules).winner, 'PLAYER');
assert.equal(api.getFinish(-1, 10, config.rules).winner, 'OPPONENT');
assert.equal(api.getFinish(8, 4, config.rules).reason, 'break');
assert.equal(api.getFinish(-8, 4, config.rules).winner, 'OPPONENT');
for (let round = 1; round < 8; round++) assert.equal(api.getFinish(round, round, config.rules), null, 'Ordinary 1-point wins cannot end before round 8');
assert.throws(() => api.validateRules({ ...config.rules, maxRounds: 0 }));
assert.throws(() => api.validateRules({ ...config.rules, crushGap: 0 }));
for (const scenario of Object.values(config.scenarios)) {
  assert.equal(scenario.playerSprite, 'assets/character-pink.png');
  for (const value of Object.values(scenario.sprites)) assert.equal(value, 'assets/character-suit.png');
}
for (const asset of ['character-pink.png', 'character-suit.png']) assert(fs.existsSync(path.join(root, 'dist/assets', asset)));
for (const [i,s] of [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].entries()) new vm.Script(s[1], { filename: 'game-inline-' + i });

// Use the actual unchanged browser draw function, not a copied deck model.
const drawStart = html.indexOf('    function generateSingleCard(');
const drawEnd = html.indexOf('    function initHands(', drawStart);
assert(drawStart > 0 && drawEnd > drawStart);
const drawSource = html.slice(drawStart, drawEnd);
function rngFor(seed) { let x = seed >>> 0; return () => { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; return (x >>> 0) / 4294967296; }; }
const policies = {
  random: (hand,rng) => Math.floor(rng() * hand.length),
  high_number: hand => hand.reduce((best,card,i) => ((card.isSpecial ? (card.effectType === 'FORCE_PUSH' ? 10 : 0) : card.value) > (hand[best].isSpecial ? (hand[best].effectType === 'FORCE_PUSH' ? 10 : 0) : hand[best].value) ? i : best), 0),
  special_first: hand => { const force = hand.findIndex(c => c.effectType === 'FORCE_PUSH'); if (force >= 0) return force; const special = hand.findIndex(c => c.isSpecial); return special >= 0 ? special : policies.high_number(hand); }
};
const statistics = [];
for (const [policy, select] of Object.entries(policies)) {
  const context = vm.createContext({ GAME_CONFIG: config, Math: Object.create(Math) });
  vm.runInContext(drawSource + '\nthis.drawForQa = generateSingleCard;', context);
  const draw = context.drawForQa;
  let total = 0, min = 10, max = 0, early = 0, byLimit = 0;
  for (let game = 1; game <= 10000; game++) {
    const rng = rngFor(20261028 + game * 7919);
    context.Math.random = rng;
    const playerHand = Array.from({length:4}, () => draw(true));
    const opponentHand = Array.from({length:4}, () => draw(false));
    let distance = config.rules.startingDistance, hadCrush = false;
    for (let round = 1; round <= config.rules.maxRounds; round++) {
      const pi = select(playerHand,rng), oi = Math.floor(rng() * 4);
      const p = playerHand[pi], o = opponentHand[oi];
      playerHand[pi] = draw(true); opponentHand[oi] = draw(false);
      const r = api.resolveRound(p,o,config.rules,config.affinities);
      hadCrush ||= r.isCrush;
      distance = Math.max(config.rules.minDistance, Math.min(config.rules.maxDistance, distance + r.distDelta));
      const finish = api.getFinish(distance,round,config.rules);
      if (finish) {
        assert(round <= 10);
        if (!hadCrush) assert(round >= 8);
        if (round < 7) { assert(hadCrush); early++; }
        if (finish.reason === 'round_limit') byLimit++;
        total += round; min = Math.min(min,round); max = Math.max(max,round);
        break;
      }
    }
  }
  const meanRounds = total / 10000;
  assert(meanRounds >= 6, policy + ' average must exceed 6 rounds');
  statistics.push({policy,matches:10000,seedBase:20261028,meanRounds,minRounds:min,maxRounds:max,under7WithCrush:early,roundLimitFinishes:byLimit});
}
const report = { ordinaryPairsChecked:checked, specialPairsChecked:54, roleMapping:'pink heroine left / suit male lead right', invariants:'large damage only counter + gap >= 4; no non-crush ending before round 8; max 10; ties stay draws', statistics };
const reportArg = process.argv.indexOf('--report');
if (reportArg >= 0) fs.writeFileSync(path.resolve(process.argv[reportArg+1]), JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
