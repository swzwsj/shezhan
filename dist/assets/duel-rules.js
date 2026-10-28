(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.DuelRules = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function validateRules(rules) {
    if (!rules || !Number.isInteger(rules.maxRounds) || rules.maxRounds < 1 || rules.maxRounds > 99) throw new Error('回合上限需要是1–99的整数');
    for (const key of ['minDistance', 'maxDistance', 'startingDistance', 'baseWinPush', 'crushWinPush', 'crushGap', 'heartPanicThreshold']) {
      if (!Number.isFinite(rules[key])) throw new Error('规则缺少有效数值：' + key);
    }
    if (rules.minDistance >= 0 || rules.maxDistance <= 0 || rules.startingDistance <= rules.minDistance || rules.startingDistance >= rules.maxDistance) throw new Error('交锋范围需要跨过0，开局值应在胜负阈值之间');
    if (rules.baseWinPush < 0 || rules.crushWinPush < rules.baseWinPush || rules.crushGap < 1) throw new Error('普通伤害、碾压伤害或碾压点差无效');
    return true;
  }

  function resolveRound(player, opponent, rules, affinities) {
    if (player.isSpecial) {
      const gaze = player.effectType === 'IMMUNE_AND_HEART';
      return { outcome: 'WIN', winner: 'PLAYER', damage: gaze ? 0 : rules.baseWinPush, distDelta: gaze ? 0 : rules.baseWinPush, heartDelta: gaze ? 22 : 8, isCrush: false, hasCounter: false, gap: 0, kind: 'special', label: gaze ? '稳住心神' : '反客为主' };
    }
    const playerCounters = affinities[player.affinity].counters === opponent.affinity;
    const opponentCounters = affinities[opponent.affinity].counters === player.affinity;
    let winner = null;
    if (playerCounters) winner = 'PLAYER';
    else if (opponentCounters) winner = 'OPPONENT';
    else if (player.value > opponent.value) winner = 'PLAYER';
    else if (player.value < opponent.value) winner = 'OPPONENT';
    if (!winner) return { outcome: 'DRAW', winner: null, damage: 0, distDelta: 0, heartDelta: 4, isCrush: false, hasCounter: false, gap: 0, kind: 'draw', label: '势均力敌' };
    const playerWon = winner === 'PLAYER';
    const hasCounter = playerWon ? playerCounters : opponentCounters;
    const gap = playerWon ? player.value - opponent.value : opponent.value - player.value;
    const isCrush = hasCounter && gap >= rules.crushGap;
    const damage = isCrush ? rules.crushWinPush : rules.baseWinPush;
    return { outcome: playerWon ? 'WIN' : 'LOSE', winner, damage, distDelta: playerWon ? damage : -damage, heartDelta: playerWon ? (isCrush ? 18 : hasCounter ? 10 : 7) : 3, isCrush, hasCounter, gap, kind: isCrush ? 'crush' : playerWon ? 'win' : 'lose', label: isCrush ? '强势碾压' : hasCounter ? (playerWon ? '克制制胜' : '遭到反制') : (playerWon ? '点数胜出' : '点数落败') };
  }

  function getFinish(distance, roundsPlayed, rules) {
    if (distance >= rules.maxDistance) return { winner: 'PLAYER', reason: 'break', roundsPlayed };
    if (distance <= rules.minDistance) return { winner: 'OPPONENT', reason: 'break', roundsPlayed };
    if (roundsPlayed >= rules.maxRounds) return { winner: distance > 0 ? 'PLAYER' : distance < 0 ? 'OPPONENT' : 'DRAW', reason: 'round_limit', roundsPlayed };
    return null;
  }
  return Object.freeze({ validateRules, resolveRound, getFinish });
});
