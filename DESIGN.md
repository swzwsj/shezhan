---
name: "舌战"
description: "以烟紫与玫瑰色半透明材质承载人物对话和恋爱交锋的现行视觉系统。"
colors:
  surface: "rgba(32,23,43,.88)"
  surface-muted: "rgba(42,27,48,.88)"
  surface-solid: "#261c32"
  field: "#1e1829"
  ink: "#fff0f7"
  ink-soft: "#edd6e4"
  rose: "#f2abc7"
  rose-light: "#f9d5e5"
  plum: "#74425e"
  gold-soft: "#d1b793"
  line: "rgba(224,167,197,.46)"
  direct: "#f3b3ce"
  subtle: "#ebd09f"
  rational: "#b7dce1"
  gaze: "#dfbdeb"
  reversal: "#f3c7b8"
  on-plum: "#fff4f9"
  on-dark: "#fff0f5"
  plum-hover: "#945672"
  field-line: "#9a6e89"
  error: "#ffc2d4"
typography:
  display:
    fontFamily: 'DuelSerif, "Noto Serif SC", "Songti SC", SimSun, serif'
    fontSize: "clamp(44px, 5.6vw, 78px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "0.04em"
  headline:
    fontFamily: 'DuelSerif, "Noto Serif SC", "Songti SC", SimSun, serif'
    fontSize: "54px"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: 'DuelSerif, "Noto Serif SC", "Songti SC", SimSun, serif'
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.04em"
  body:
    fontFamily: 'DuelSerif, "Noto Serif SC", "Songti SC", SimSun, serif'
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0.015em"
  label:
    fontFamily: '"Microsoft YaHei", "PingFang SC", sans-serif'
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.3
rounded:
  field: "4px"
  control: "8px"
  card: "12px"
  modal: "16px"
  hud: "5px 22px 5px 22px"
  dialogue: "6px 22px 6px 22px"
  speaker: "3px 14px 3px 14px"
  nameplate: "4px 10px 4px 10px"
  legend: "9px"
spacing:
  tight: "4px"
  compact: "6px"
  control: "8px"
  base: "12px"
  section: "24px"
components:
  button-primary:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.on-plum}"
    rounded: "{rounded.control}"
    padding: "6px 16px"
  button-primary-hover:
    backgroundColor: "{colors.plum-hover}"
  button-tool:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.control}"
    padding: "0 10px"
    height: "32px"
  button-tool-hover:
    backgroundColor: "rgba(255,236,244,.13)"
  input-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "6px 10px"
  card-response:
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "0"
    width: "100%"
    height: "134px"
  romance-status:
    textColor: "{colors.ink}"
    rounded: "{rounded.hud}"
    padding: "18px 32px 10px"
    width: "min(640px, 100%)"
  dialogue-panel:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.dialogue}"
    padding: "30px 42px 23px"
    width: "100%"
  speaker-tab:
    rounded: "{rounded.speaker}"
    padding: "8px 22px"
  actor-nameplate:
    backgroundColor: "rgba(53,31,57,.9)"
    textColor: "{colors.ink}"
    rounded: "{rounded.nameplate}"
    padding: "5px 12px"
  affinity-legend:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.legend}"
    padding: "6px 12px 5px"
    width: "100%"
  result-badge:
    textColor: "{colors.rose-light}"
    rounded: "{rounded.field}"
    padding: "6px 12px"
---

# Design System: 舌战

## Overview

**Creative North Star: "恋爱沉浸优先"**

《舌战》的现行界面以烟紫与玫瑰色半透明承载层、浅粉文字和柔金细线承接人物关系。场景透过有色面板显现，中文宋体用于台词、人物签名、回合与心率数字；较小的操作说明使用中文无衬线字体。细线心形连接回合与心动状态。

用户已明确否定大面积纯白实底。全屏场景、原人物立绘、简洁卡牌和现有阅读层级继续服务恋爱沉浸；材质调整不改变三套剧情及十回合规则。具体对局组成见 `.impeccable/surfaces/duel.md`。本文件记录 V6 源码中的现行值；尚无 V6 新截图，渲染、遮挡和跨视口验收待补。

**Key Characteristics:**

- 烟紫与玫瑰色半透明面板、浅粉正文、柔金细线。
- 自托管中文宋体与紧凑的无衬线功能说明并用。
- 非对称圆角、独立说话人签名片和细线心形。
- 简洁深色手牌与克制图例共享较浅属性色和明确箭头。

## Colors

前置 tokens 是颜色数值的规范来源；半透明材质由后置主题覆盖旧样式。渐变的完整实现保存在 sidecar 组件预览中。

### Primary

- **心动玫瑰（rose）：** 心率大数字、心形轮廓、通用焦点与关键 SVG。
- **浅玫瑰（rose-light）：** 回合读数、牌面点数、标题、交锋值与结果文字。
- **玫瑰紫（plum / plum-hover）：** 场景、配置和结局操作按钮；悬停使用较亮的玫瑰紫。

### Secondary

- **浅直球粉 / 浅试探金 / 浅掩饰青（direct / subtle / rational）：** 普通牌类型、图形、克制说明及对应图例。试探金是属性色，与装饰柔金分开。
- **浅凝视紫 / 浅逆转桃（gaze / reversal）：** 两种奇策牌的局部语义色。

### Tertiary

- **柔金（gold-soft）：** 中央状态下缘细线和既有装饰边缘。
- **错误浅玫瑰（error）：** 场景编辑状态与配置解析提示。

### Neutral

- **烟紫承载层（surface / surface-muted）：** 图例、对决牌、背面及设置分组；中央状态、对话和手牌使用各自的多段深色渐变。
- **实色烟紫（surface-solid）：** 原生剧情下拉选项，避免透明选项背景。
- **浅粉墨 / 次级粉墨（ink / ink-soft）：** 正文与说明；变量名沿用现行源码，实际均为浅色文字。
- **玫瑰细线（line）：** 面板边缘、心形连接和结果徽记。
- **操作文字（on-plum / on-dark）：** 深色按钮与顶部菜单文字。
- **深紫编辑面（field / field-line）：** 文本框底色及细边框。

**The Scene Through Surface Rule.** 阅读面使用有色半透明深底和浅色文字；中央状态、对话与手牌保留各自的渐变，不使用大面积纯白实底或背景模糊。

**The Shared Accent Rule.** 同一属性在手牌、克制文字与图例高亮中使用同一属性色；关系仍由文字和定向箭头表达。

## Typography

**Display Font:** DuelSerif（自托管 ZCOOL XiaoWei Regular），后备为 Noto Serif SC、Songti SC、SimSun、serif。

**Body Font:** 台词沿用同一宋体；功能说明使用 Microsoft YaHei、PingFang SC、sans-serif。

**Label/Mono Font:** JSON 与图片链接编辑框使用 `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`。

**Character:** 宋体承载台词、人物签名与大数字；无衬线说明保持紧凑。自托管字体仅含常规字重（400），较重文字由浏览器合成。字体文件及其 `dist/assets/fonts/OFL.txt` 授权保持不变。

### Hierarchy

- **Display：** 判定大字使用前置 display token，描边与文字投影支持场景上阅读；手机（44px），短横屏（32px）。
- **Headline：** 回合与百分比心率（400；54px / 1），使用等宽数字；手机（40px），短横屏（32px）。
- **Title：** 说话人姓名（400；20px / 1.15）；手机（17px），短横屏（15px）。
- **Body：** 台词（400；22px / 1.65）；手机（18px / 1.6），短横屏（15px / 1.55）。左对齐，允许长文本换行。
- **Label：** 可见功能说明以（11px）为下限；桌面状态标签（12px / 1.3）。后置可读性规则覆盖较小的早期选择器值。
- **Card rank：** 普通牌点数（400；38px / 1）；手机（29px），短横屏（23px）。奇策位置使用 SVG 星形。
- **Wordmark：** 游戏名（400；28px / 1），手机（25px），短横屏（23px）。

## Layout

舞台跟随当前视口（100dvh）。顶部菜单之下是单列三行网格：状态、可伸缩场景和底部交互。背景覆盖舞台，人物分居两侧。桌面菜单高度（52px），顶部居中状态宽度上限（640px），中下部宽幅对话上限（1120px），交锋轨道上限（760px），图例与四张等宽手牌所在区域上限（620px）。

重复间距沿用（4 / 6 / 8 / 12 / 24px）；状态、对话与签名片保留各自内边距。

- **手机（最大宽度 767px）：** 菜单两行，最小高度（96px），工具高度（44px）。状态与对话全宽；状态中央通道（42px），对话最小高度（114px）。四张牌同排、间隙（6px）、牌高（128px）。底部使用 `env(safe-area-inset-bottom)`，立绘高度随可用视口计算。
- **短横屏（最小宽度 768px 且最大高度 560px）：** 菜单（40px），状态宽（450px），对话最小高度（66px），手牌宽度上限（424px），牌高（104px）。工具显示 SVG，规则解释行隐藏；结算时状态降至（0.1）不透明度。

现有 `.impeccable/review/` 中的旧版截图不能证明 V6 材质已通过验收。待重新捕获（1440×900）、（1280×720）、（390×844）及（844×390）中的文字、人物遮挡与完整对局状态；这些是检查尺寸，并非新增断点。

## Elevation & Depth

多段烟紫/玫瑰渐变、透明叠层、浅色细线和柔影共同构成深度，背景仍可从承载层透出。对话内描线与跨越上缘的签名片保持真实叠放；角色姓名牌使用深色半透明底。弹层采用更实的深紫阅读面与有色遮罩，现行覆盖层将背景模糊设为 none；旧玻璃声明不是新材质依据。

### Shadow Vocabulary

- **状态与对话柔影**（`0 12px 30px rgba(10,7,18,.3)`）：主要阅读层。
- **手牌静态影**（`0 6px 16px rgba(9,6,17,.3)`）：可出牌卡片。
- **手牌交互影**（`0 10px 20px rgba(9,6,17,.4)`）：悬停/键盘聚焦，配合上移（6px）；按下回落至上移（2px）。
- **弹层柔影**（`0 14px 36px rgba(39,18,36,.3)`）：结局、场景与配置弹层。
- **姓名牌柔影**（`0 5px 14px rgba(39,18,36,.18)`）：两侧角色姓名牌。
- **判定文字投影：** 短暂判定大字配合状态描边，不作为面板阴影。

手牌与菜单悬停（0.2s），交锋指针（0.5s），判定进入（0.8s），后两者使用 `cubic-bezier(.16,1,.3,1)`。既有立绘呼吸周期（4.2s）。

**The Measured Motion Rule.** 牌面位移、进度变化和判定出现沿用现有时序；减少动态偏好会关闭牌面/指针/计时条过渡与判定、呼吸动画。

## Shapes

柔圆角与非对称签名片继续沿用。桌面状态采用 hud token 的对角小/大圆角；手机实际覆盖为（14px 14px 20px 20px），短横屏为（12px 12px 18px 18px），不能将旧版桌面圆角当成现行值。对话、说话人片与角色姓名牌保持各自的非对称角；手牌是 card 圆角的简洁矩形。

心形、属性图形、奇策星形、设置与关闭图标使用现有内联 SVG。保留文字与图形协作；旧设置表单中的方向 emoji 不扩展为公共图标体系。

## Components

### Buttons

玫瑰紫应用按钮与透明顶部工具并存。

- **Primary：** 使用前置 button-primary token，文字（12px / 16px；700）。结局按钮保留较宽内边距（8px 20px）和圆角（12px）。
- **Hover / Focus：** 应用按钮悬停使用 plum-hover，并保留已有亮度反馈；通用焦点是玫瑰描边（2px）、外偏移（4px）。
- **Tools：** 透明底、浅色细边和 SVG；悬停增加轻微浅色底。桌面高度（32px），手机（44px），短横屏（28px）。
- **Close：** 弹层关闭按钮使用透明底、浅色 SVG，点击区至少（44×44px）。

### Cards / Containers

手牌用单层深紫渐变表达一项回应。

- **Material：** 实际深紫渐变、浅玫瑰细边和浅色正文；类型、图形及克制文字使用各自属性色。完整渐变见 sidecar，前置组件 token 不用单色替代渐变。
- **Hierarchy：** 左上类型，中上点数或星形，底部名称与短效果；完整效果保留在可访问名称与提示中。
- **States：** 悬停/聚焦抬起、加深柔影并显示属性色边框；按下回落，结算期间使用原生 disabled。
- **Match result badge：** 玫瑰细线、浅玫瑰文字和小圆角，非交互状态标签。

### Inputs / Fields

编辑字段使用深紫底、浅字和细玫瑰边。链接框是 field 圆角；JSON 编辑器为（12px）圆角、内边距（12px）、最小高度（300px）。placeholder 为完整不透明度的次级粉墨。保留可选中文本、通用焦点与 `aria-invalid="true"` 错误状态，解析失败提供中文修正指导。

### Navigation

顶部菜单包含游戏名、当前剧情名称、剧情选择与三个工具。剧情名称单行省略；选择框桌面宽（202px），手机填充剩余宽度，原生选项使用实色烟紫底。手机与短横屏隐藏工具文字，保留 SVG、`aria-label` 和提示；音效开关由 `aria-pressed` 与声波状态表达。

### Romance status

中央心形连接同级大回合数与百分比心率，回合为浅玫瑰，心率为心动玫瑰。状态背景是四段横向烟紫渐变，表面一圈玫瑰细线，下缘保留柔金细线；回应提示、倒计时与细进度横跨底部。波形仍是既有百分比状态反馈，状态面板不可点击。

### Dialogue panel and speaker tab

宽幅台词框采用三段烟紫/玫瑰半透明渐变，正文左对齐。独立签名片跨越上缘，侧标与姓名同行；双方签名片各用现行玫瑰紫渐变，女主状态由 data-speaker 切换。内描线与右下线描心形不覆盖正文。两侧人物姓名牌独立使用深色半透明底，保留原人物图像。

### Directed counter legend

图例使用烟紫半透明面，三组箭头指向被克制一方；关系直接读取真实配置。普通手牌悬停或聚焦时，对应关系显示半透明玫瑰底与属性色下划线，离开后恢复。解释行位于关系下方，短横屏隐藏；普通推进、碾压条件、阈值和回合上限保持既有规则。

## Do's and Don'ts

### Do:

- **Do** 用烟紫与玫瑰色半透明面承载阅读，以浅色正文和说明保持场景上的可读性。
- **Do** 保留顶部中央回合/百分比心率、中下部宽幅对话、图例与四张简洁手牌的现行层级。
- **Do** 让属性色同时标识手牌和对应克制箭头，并保留文字与 SVG 图形。
- **Do** 保留原场景、人物、字体及其 OFL 授权、输入焦点和中文错误指导。

### Don't:

- **Don't** 恢复大面积纯白实底面板或用背景模糊替代现行有色承载层。
- **Don't** 把柔金装饰色扩展成正文、关键数字或按钮主文字颜色。
- **Don't** 给简洁手牌添加会挤压点数、名称与短效果的大幅装饰。
- **Don't** 将百分比心率写成 BPM，或把旧版截图和静态色值检查写成 V6 渲染验收通过。
- **Don't** 将被覆盖的旧玻璃/金色样式、隐藏皇冠与动作气泡、旧表单 emoji 当成新公共组件。
