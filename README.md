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

## 修改与构建

主文件：`dist/index.html`。原程序结构保留，名称和默认图片已经替换。样式通过 Tailwind CSS 3.4.17 在构建时生成，浏览器不再依赖 Tailwind CDN 脚本。

```powershell
npm ci
npm run build
node preview.mjs
```

静态发布目录为 `dist`；Sites 站点身份保存在 `.openai/hosting.json`。后续更新请复用该身份。
