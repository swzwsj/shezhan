# 舌战

双人卡牌对峙游戏。根据用户提供的 `code_artifact.html` 部署，保留原有三套剧本、台词、出牌规则、音效及结局。

- 左方【女主 / 你】：用户图2，`dist/assets/heroine.png`。
- 右方【对手】：用户图1，`dist/assets/opponent.png`，覆盖三套剧本的全部情绪状态。
- 两张人物 PNG 为原文件字节副本，保留透明背景。

## 本地玩

直接用浏览器打开 `dist/index.html`。页面不需要服务端或模型 API。断网时，Google Fonts 会回退到系统字体，图片、样式和对局逻辑均为本地文件。

也可在本目录运行 `node preview.mjs`，再打开终端显示的 Local 地址。

## 操作

点击底部四张手牌之一出牌。直球克掩饰，掩饰克试探，试探克直球；同属性比较点数。特殊牌效果见牌面。每轮 10 秒，超时按原玩法自动出牌。对峙值达到 +5 或 -5 进入对应结局，之后可重玩或切换剧本。

右上角可切换三套剧本、立绘和配置，并开关音效。原版的立绘与 JSON 编辑仅对当前页面会话生效；刷新后恢复已部署的默认配置。

## 人物与场景版

双方立绘采用左近右远的站位，脚底回到场景地面；1280×720下女主基础高度约590px、对手约533px，名字与出招气泡独立摆放。背景随剧本自动切换：深夜现代书房、假面舞会回廊、月下竹影寒潭。右上角“场景/立绘”可设置当前剧本的背景图片链接，和原立绘设置一样仅在当前页面会话应用。

场景原图位于 `dist/assets/backgrounds/`：`study.png`、`ballroom.png`、`bamboo.png`，使用内置ImageGen生成；人物原PNG保持不变。舞台布局在 `dist/assets/stage.css`，天气Canvas仅叠加透明粒子，场景图片不会被遮盖。

## 插画牌组

手牌、飞牌与交锋揭牌共用 `dist/assets/cards/` 中的五类插画：`direct.png`（赤红羽笔玫瑰／直球）、`subtle.png`（金钥匙密信／试探）、`rational.png`（银蓝面具／掩饰）、`gaze.png`（紫晶眼形宝石／深情凝视）、`reversal.png`（黑金棋后／反客为主）；`back.png` 为统一暗牌牌背。全部使用内置ImageGen生成，点数与文字由页面实际配置渲染。

普通1–9点共用各自属性的卡图，以真实点数和三档招式名区分；特技使用专属标记。竖卡保留台词预览、克制与效果，支持点击或聚焦后按Enter出牌。`dist/assets/cards.css` 定义牌面和本轮人物站位；短横屏显示紧凑揭牌，不隐藏卡面。

## 修改与构建

主文件：`dist/index.html`。原程序结构保留，名称和默认图片已经替换。样式通过 Tailwind CSS 3.4.17 在构建时生成，浏览器不再依赖 Tailwind CDN 脚本。

```powershell
npm ci
npm run build
node preview.mjs
```

静态发布目录为 `dist`；Sites 站点身份保存在 `.openai/hosting.json`。后续更新请复用该身份。
