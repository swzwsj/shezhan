/* H02 dialogue copied from saved manuscript edf045ff; no API key at runtime. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.H02Story = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const scenario = {
  "id": "scenario_h02",
  "title": "BeReal咖啡厅 · 昼夜之间",
  "characterName": "程严",
  "playerName": "陆星河",
  "actorTag": "正装之下",
  "themeBg": "cafe",
  "artLayout": "h02",
  "background": "assets/h02/background-cafe.png",
  "usePhotoSprite": true,
  "playerSprite": "assets/h02/lu-idle.png",
  "playerSprites": {
    "idle": "assets/h02/lu-idle.png",
    "playful": "assets/h02/lu-playful.png",
    "intent": "assets/h02/lu-intent.png"
  },
  "sprites": {
    "idle": "assets/h02/cheng-idle.png",
    "flustered": "assets/h02/cheng-flustered.png",
    "overload": "assets/h02/cheng-overload.png",
    "defeated": "assets/h02/cheng-defeated.png"
  },
  "hairColor": "#171424",
  "initialDialogue": "既然碰上了，昨晚的事总得当面算清。程总白天坐得这么远，倒比昨晚在水里更防着人。",
  "initialSpeaker": "PLAYER",
  "playerLines": {
    "DIRECT_LOW": "既然碰上了，昨晚的事总得当面算清。",
    "DIRECT_HIGH": "程总白天坐得这么远，倒比昨晚在水里更防着人。",
    "SUBTLE_LOW": "昨晚我说过，下次见面给你赔罪。",
    "SUBTLE_HIGH": "车都到了，既然还没走，就别急着拿距离当挡箭牌。",
    "RATIONAL_LOW": "陆星河，心理医生。昨天没来得及正式介绍。",
    "RATIONAL_HIGH": "程先生。"
  },
  "specialLines": {
    "IMMUNE_AND_HEART": "（陆星河握着外带杯，直视他的眼睛，没有移开目光。）",
    "FORCE_PUSH": "（陆星河持杯站在桌侧，神色从容，静候他的回应。）"
  },
  "opponentLine": "陆医生如果真想道歉，昨天在水里就该说完了。",
  "reactionQuotes": {
    "loseClash": "（程严嘴角微紧，视线定在她脸上未移开。）",
    "winClash": "（程严视线微抬，神情平淡克制，夺回话语主动。）",
    "drawClash": "（两人维持着桌边的僵持，谁也没有让步。）",
    "panicClash": "（程严视线锁定，气息维持紧绷，未再作声。）"
  },
  "stages": [
    {
      "id": "xf-h02-professional-distance",
      "title": "职业称呼",
      "threshold": 1,
      "sourceText": "【立绘·程严：视线平视微抬，神情克制疏离；陆星河：唇角微扬，目光直视】\n程严（克制带刺）\n陆医生白天看诊，也喜欢翻昨晚的旧账？\n陆星河（轻快从容）\n得看程总给不给看诊的机会。\n【听方反应】程严嘴角微紧，视线定在她脸上未移开。",
      "heroineExpression": "idle",
      "lines": [
        {
          "speaker": "程严",
          "tone": "克制带刺",
          "text": "陆医生白天看诊，也喜欢翻昨晚的旧账？"
        },
        {
          "speaker": "陆星河",
          "tone": "轻快从容",
          "text": "得看程总给不给看诊的机会。"
        },
        {
          "speaker": "旁白",
          "text": "程严嘴角微紧，视线定在她脸上未移开。"
        }
      ]
    },
    {
      "id": "xf-h02-last-night",
      "title": "昨夜反差",
      "threshold": 3,
      "sourceText": "【立绘·陆星河：眼角带玩味；程严：眼神骤凝，下颌微收】\n陆星河（压低调侃）\n昨晚在水里，你可没这么惜字。\n程严（冷淡微沉）\n昨晚在岸上，你也没这么客气。\n【听方反应】程严视线锁定，气息维持紧绷，未再作声。",
      "heroineExpression": "playful",
      "lines": [
        {
          "speaker": "陆星河",
          "tone": "压低调侃",
          "text": "昨晚在水里，你可没这么惜字。"
        },
        {
          "speaker": "程严",
          "tone": "冷淡微沉",
          "text": "昨晚在岸上，你也没这么客气。"
        },
        {
          "speaker": "旁白",
          "text": "程严视线锁定，气息维持紧绷，未再作声。"
        }
      ]
    },
    {
      "id": "xf-h02-direct-response",
      "title": "争到回应",
      "threshold": 5,
      "sourceText": "【立绘·陆星河：目光探究，神色笃定；程严：眉心微蹙，眼神带压迫感】\n陆星河（轻缓逼近）\n昨晚在水里那场较量，是记不得，还是不方便在这儿说？\n程严（低沉带压迫）\n你指的是哪一件？\n【听方反应】陆星河神色未动，迎着他的审视，静候后续。",
      "heroineExpression": "intent",
      "lines": [
        {
          "speaker": "陆星河",
          "tone": "轻缓逼近",
          "text": "昨晚在水里那场较量，是记不得，还是不方便在这儿说？"
        },
        {
          "speaker": "程严",
          "tone": "低沉带压迫",
          "text": "你指的是哪一件？"
        },
        {
          "speaker": "旁白",
          "text": "陆星河神色未动，迎着他的审视，静候后续。"
        }
      ]
    }
  ],
  "outcomes": {
    "win": {
      "sourceText": "【局后影片·胜】\n▲ 切回影片。程严坐在桌前，气息稍沉，抬眼看向桌侧站立的陆星河。助理在侧后未动。\n程严（迎着她的目光，语调低沉沉静）\n你到底想试探什么？\n陆星河（握着纸杯，语气轻缓自若）\n看你白天和昨晚，到底哪一面是真的。\n▲ 程严停顿片刻，收敛起外露的情绪，视线从她脸上移开一瞬。\n程严（语气恢复平淡克制）\n至于昨晚那个道歉，我还记着。\n陆星河（从容一笑）\n那就好，省得我再提醒。\n▲ 程严眼帘微敛，左手在桌下没有动，未再接话。",
      "lines": [
        {
          "speaker": "旁白",
          "text": "程严坐在桌前，气息稍沉，抬眼看向桌侧站立的陆星河。助理在侧后未动。"
        },
        {
          "speaker": "程严",
          "tone": "迎着她的目光，语调低沉沉静",
          "text": "你到底想试探什么？"
        },
        {
          "speaker": "陆星河",
          "tone": "握着纸杯，语气轻缓自若",
          "text": "看你白天和昨晚，到底哪一面是真的。"
        },
        {
          "speaker": "旁白",
          "text": "程严停顿片刻，收敛起外露的情绪，视线从她脸上移开一瞬。"
        },
        {
          "speaker": "程严",
          "tone": "语气恢复平淡克制",
          "text": "至于昨晚那个道歉，我还记着。"
        },
        {
          "speaker": "陆星河",
          "tone": "从容一笑",
          "text": "那就好，省得我再提醒。"
        },
        {
          "speaker": "旁白",
          "text": "程严眼帘微敛，左手在桌下没有动，未再接话。"
        }
      ],
      "reasonNotes": {
        "break": "交锋达到+8，陆争到一次正面回应；不演成臣服或坦白。",
        "round_limit": "十回合结束交锋为正，陆略占上风；按本场胜承接，不追加彻底击穿的演出。"
      }
    },
    "lose": {
      "sourceText": "【局后影片·负】\n▲ 切回影片。程严端坐在桌前，已收住方才的外露情绪，神情重归平淡克制，夺回话语主动。陆星河持杯站在桌侧。\n程严（视线微抬，语气平淡带威压）\n问这么多，是想了解我，还是想让我留下？\n陆星河（目光从容掠向门外，语调得体）\n车都到了，我哪敢耽误程总。\n▲ 程严神色微敛，视线从她身上移开，未再多言。",
      "lines": [
        {
          "speaker": "旁白",
          "text": "程严端坐在桌前，已收住方才的外露情绪，神情重归平淡克制，夺回话语主动。陆星河持杯站在桌侧。"
        },
        {
          "speaker": "程严",
          "tone": "视线微抬，语气平淡带威压",
          "text": "问这么多，是想了解我，还是想让我留下？"
        },
        {
          "speaker": "陆星河",
          "tone": "目光从容掠向门外，语调得体",
          "text": "车都到了，我哪敢耽误程总。"
        },
        {
          "speaker": "旁白",
          "text": "程严神色微敛，视线从她身上移开，未再多言。"
        }
      ],
      "reasonNotes": {
        "break": "交锋达到−8，程严夺回主动；不追加训斥或新的惩罚。",
        "round_limit": "十回合结束交锋为负，程严略占上风；按本场负承接，不追加新的惩罚。"
      }
    },
    "draw": {
      "sourceText": "【局后影片·平】\n▲ 切回影片。程严正装坐于桌前，陆星河握着纸杯站在桌侧，两人维持着开局时的僵持。\n程严（视线微抬，语气波澜不惊）\n陆医生绕了这么大一圈，该问的问完了？\n陆星河（目光迎上他，寸步不让）\n程总一句都没正面答，我怎么算问完。\n▲ 程严嘴角微抿，神色未松，谁也没再退让，无言对峙片刻。",
      "lines": [
        {
          "speaker": "旁白",
          "text": "程严正装坐于桌前，陆星河握着纸杯站在桌侧，两人维持着开局时的僵持。"
        },
        {
          "speaker": "程严",
          "tone": "视线微抬，语气波澜不惊",
          "text": "陆医生绕了这么大一圈，该问的问完了？"
        },
        {
          "speaker": "陆星河",
          "tone": "目光迎上他，寸步不让",
          "text": "程总一句都没正面答，我怎么算问完。"
        },
        {
          "speaker": "旁白",
          "text": "程严嘴角微抿，神色未松，谁也没再退让，无言对峙片刻。"
        }
      ],
      "reasonNotes": {
        "round_limit": "十回合交锋仍为0，双方没有让步。只接本场平局回应，随后回到原离场影片。"
      }
    }
  },
  "commonExit": [
    {
      "speaker": "旁白",
      "hideOpponent": true,
      "text": "椅脚擦过地面。他已经站起来，拉平袖口。助理抱起文件夹，跟着起身。"
    },
    {
      "speaker": "程严",
      "tone": "压着不快",
      "text": "你留下接待。"
    },
    {
      "speaker": "旁白",
      "text": "助理停住。程严从陆星河身旁经过，视线看向出口。陆星河握住纸杯，掌心收紧，杯套侧面被指尖压出一道折痕。"
    },
    {
      "speaker": "陆星河",
      "tone": "内心",
      "text": "人一走就推给助理，白天这副正经模样，比昨晚能装。"
    },
    {
      "speaker": "旁白",
      "text": "陆松开手指，拇指抚过杯套上的折痕，转向助理。"
    },
    {
      "speaker": "陆星河",
      "tone": "语气随和",
      "text": "方便坐一会儿吗？"
    },
    {
      "speaker": "助理",
      "tone": "客气地应答",
      "text": "您请。"
    }
  ],
  "endings": {
    "winTitle": "争到一次正面回应",
    "winText": "他迎着她的目光，终于接下这场试探。",
    "loseTitle": "话语主动仍在他手中",
    "loseText": "她收住追问，等他给出下一句回应。",
    "drawTitle": "桌边的僵持",
    "drawText": "两人都没有让步，未说完的话仍留在彼此之间。"
  },
  "sourceVersion": "edf045ff-12d3-4c71-8020-88aa78204d89",
  "sourceFingerprint": "imported-project-manuscript-v1:sha256:d88beec543d8dfc461327a779730dbbe65f7bef3bcd6d4165bf57c1b8c19e99a"
};
  function crossedStages(before, after, played, stages = scenario.stages) {
    return stages.filter(stage => before < stage.threshold && after >= stage.threshold && !played.has(stage.id))
      .sort((a, b) => a.threshold - b.threshold);
  }
  function emotionalState(state, rules) {
    if (state.distance >= rules.maxDistance) return 'defeated';
    if (state.heartRate >= rules.heartPanicThreshold) return 'overload';
    if (state.gazeAversion === 1 || state.distance >= 2) return 'flustered';
    return 'idle';
  }
  function playerSpriteFor(scene, expression) {
    const variants = scene.playerSprites;
    if (!variants || scene.playerSprite !== variants.idle) return scene.playerSprite;
    return variants[expression] || scene.playerSprite;
  }
  return { scenario, crossedStages, emotionalState, playerSpriteFor };
});
