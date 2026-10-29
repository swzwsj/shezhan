# 舌战

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

面向女性向、恋爱向互动游戏玩家。本轮用户确认：恋爱沉浸优先，对话与心率反馈突出，规则图例清楚但收敛。

## Product Purpose

通过直球、掩饰、试探和特殊牌进行双人对话交锋，在三套既有故事中体验人物反应和不同结局。玩家能直接点击或通过键盘出牌、读台词、理解判定并重玩。

## Capabilities and Constraints

- 保留现有三套剧情、角色对应和十回合规则；粉色人物为左侧女主，西装人物为右侧男主。
- 普通胜出推进1；克制且点数领先至少4时碾压推进3；交锋阈值±8，最多10回合，平分时为平局。
- 心率是本游戏既有的百分比状态值，不是医学BPM数据。
- 本轮将回合和心率置于顶部中央大UI；中下部为宽幅对话框；添加与真实配置一致的克制图例。
- 静态HTML/CSS/JavaScript运行，不增加后端或模型依赖。既有场景、立绘与配置编辑仍可使用。
- 独立源码在xinfang/舌战，GitHub仓库swzwsj/shezhan，与三消swzwsj/sanxiao分离；复用原Sites站点及其访问范围。

## Brand Commitments

游戏名《舌战》。本轮明确女性向恋爱游戏UI方向，以人物关系、对话阅读和心率反馈为核心；保留原人物与三套背景场景，卡面继续简洁。

## Evidence on Hand

dist/index.html为真实游戏；dist/assets/duel-rules.js为共用判定模块；qa/check-game.cjs含组合与节奏验证。既有人物、背景和牌图位于dist/assets，历史记录位于本地忽略目录.local。

## Product Principles

1. 人物和台词承载沉浸，界面帮助理解关系与反馈。
2. 回合、心率、克制与伤害显示真实状态。
3. 规则可见、出牌可操作，装饰不挤压文字或遮挡人物面部。
4. 桌面与手机均能完成完整对局和重开。
