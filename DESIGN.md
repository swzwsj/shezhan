---
name: "舌战"
description: "以信笺、心形和纸色呈现人物对话与恋爱交锋的现行视觉系统。"
colors:
  paper: "#fff8fa"
  paper-blush: "#f4e4ec"
  ink: "#493144"
  ink-soft: "#78576a"
  rose: "#a5466e"
  rose-deep: "#753950"
  plum: "#52354d"
  gold-soft: "#c6ab8a"
  line: "#d8b7c6"
  direct: "#a34769"
  subtle: "#80603c"
  rational: "#4c7476"
  gaze: "#855f91"
  reversal: "#965d53"
  on-plum: "#fff4f9"
  on-dark: "#fff0f5"
  plum-hover: "#714361"
  field: "#fffdfd"
  field-line: "#cba3b7"
  error: "#9b355a"
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
  hud: "20px 20px 28px 28px"
  dialogue: "6px 22px 6px 22px"
  speaker: "3px 14px 3px 14px"
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
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "0"
    width: "100%"
    height: "134px"
  romance-status:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hud}"
    padding: "18px 32px 10px"
    width: "min(640px, 100%)"
  dialogue-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.dialogue}"
    padding: "30px 42px 23px"
    width: "100%"
  speaker-tab:
    backgroundColor: "{colors.plum}"
    rounded: "{rounded.speaker}"
    padding: "8px 22px"
  affinity-legend:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.legend}"
    padding: "6px 12px 5px"
    width: "100%"
  result-badge:
    textColor: "{colors.rose-deep}"
    rounded: "{rounded.field}"
    padding: "6px 12px"
---

# Design System: 舌战

## Overview

**Creative North Star: "恋爱沉浸优先"**

《舌战》的现行界面以暖白纸面、花瓣粉和雾紫墨色承载人物关系。中文宋体用于台词、人物签名、回合与心率数字；较小的操作说明使用中文无衬线字体。纸面从既有场景中轻轻浮起，心形细线将回合和心动状态连在一起。

这里记录的是已实现的对局视觉语言，描述性名称均来自现有代码与已确认方向。全屏场景和原人物立绘构成情绪背景，界面用清晰的阅读面、简洁卡牌与克制的规则提示支持恋爱沉浸。当前对局的具体组成和内容策略见 `.impeccable/surfaces/duel.md`；本文件不新增品牌设定。

**Key Characteristics:**

- 暖白纸面、玫瑰色关键状态、雾紫墨色正文。
- 自托管中文宋体与紧凑的无衬线功能说明并用。
- 非对称信笺圆角、独立说话人签名片和细线心形。
- 普通牌与对应克制关系共享属性色，箭头保持明确方向。

## Colors

整体是偏暖的纸面与玫瑰色文字组合；属性色承担识别，场景图片保留各自的环境色。前置 tokens 是数值的规范来源。

### Primary

- **玫瑰色（rose）：** 男主心率大数字、心形轮廓、通用焦点与关键 SVG。
- **深玫瑰（rose-deep）：** 回合读数、牌面点数、标题、交锋值和应用结果文字。
- **雾紫（plum / plum-hover）：** 说话人签名片与设置/结局操作按钮；悬停操作按钮使用较亮的雾紫。

### Secondary

- **直球 / 试探 / 掩饰（direct / subtle / rational）：** 普通牌的属性图形、类型、克制说明以及相应图例高亮。
- **凝视 / 逆转（gaze / reversal）：** 两种奇策牌的属性图形及类型。它们是当前牌种的局部语义色。

### Tertiary

- **柔金（gold-soft）：** 中央状态下缘的一像素细线，以及沿用样式的装饰边缘。
- **错误玫瑰（error）：** 场景编辑与配置编辑的错误提示。

### Neutral

- **暖白信笺（paper）：** 状态、对话、图例、手牌、对决牌和弹层阅读面。
- **粉雾纸色（paper-blush）：** 交锋进度、背面、设置分组和滚动条轨道。
- **雾紫墨（ink）/ 次级墨（ink-soft）：** 正文与功能说明，避免说明文字直接压在复杂场景上。
- **粉线（line）：** 心形连接细线和结果徽记边框。
- **浅色反相文字（on-plum / on-dark）：** 深色按钮和顶部菜单的文字。
- **编辑纸面（field / field-line）：** 文本框的浅底与细边框。

**The Paper and Ink Rule.** 阅读面使用纸色，正文使用墨色；柔金保留在细线与边缘装饰中。

**The Shared Accent Rule.** 同一属性在手牌、克制文字与图例高亮中使用同一属性色；关系仍由文字和定向箭头表达。

## Typography

**Display Font:** DuelSerif（自托管 ZCOOL XiaoWei Regular），后备为 Noto Serif SC、Songti SC、SimSun、serif。

**Body Font:** 台词沿用同一宋体；功能说明使用 Microsoft YaHei、PingFang SC、sans-serif。

**Label/Mono Font:** JSON 和图片链接编辑框沿用实际的 `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`。

**Character:** 宋体的细节服务于台词阅读、人物签名和大数字。无衬线说明保持紧凑，属性文字需要加重时由现有 CSS 指定。字体文件只提供常规字重（400）；界面中的较重 UI 文字由浏览器合成，不代表存在额外字体文件。

### Hierarchy

- **Display：** 判定大字（400；前置 display token；行高 1.12），带描边与文字投影以覆盖场景。手机固定为（44px），短横屏为（32px）。
- **Headline：** 回合与百分比心率（400；桌面 54px / 1），采用等宽数字；手机为（40px），短横屏为（32px）。
- **Title：** 说话人姓名（400；20px / 1.15）；手机为（17px），短横屏为（15px）。标题字距沿用 title token。
- **Body：** 台词（400；22px / 1.65）；手机为（18px / 1.6），短横屏为（15px / 1.55）。台词左对齐并允许长文本换行，宽度跟随对话纸面。
- **Label：** 图例与功能说明以（11px）为主；状态标签在桌面为（12px / 1.3）。部分桌面辅助说明原始选择器更小，但后置可读性规则已把可见功能文字统一抬至（11px）。
- **Card rank：** 普通牌点数（400；38px / 1）；手机为（29px），短横屏为（23px）。奇策位置显示 SVG 星形。
- **Wordmark：** 游戏名（400；28px / 1），手机为（25px），短横屏为（23px）。

## Layout

界面固定在当前视口高度（100dvh），顶部为菜单，舞台内部使用单列三行网格：状态、可伸缩场景、底部交互。背景图覆盖整个舞台，人物位于两侧，状态和阅读面在前景。桌面菜单高度（52px）；状态宽度上限（640px），对话宽度上限（1120px），交锋轨道宽度上限（760px），图例与四张手牌所在区域宽度上限（620px）。四张手牌保持等宽网格。

空间节奏直接来自（4 / 6 / 8 / 12 / 24px）等重复间距；非对称纸面与大数值组件还使用各自的实际内边距，不人为统一成新网格。

- **手机（最大宽度 767px）：** 菜单换两行，最小高度（96px），工具按钮高度（44px）。状态和对话全宽；状态内心形通道缩为（42px），对话最小高度（114px）。四张牌仍同排，间隙（6px），牌高（128px）。安全区底部通过 `env(safe-area-inset-bottom)` 留白；立绘使用与可用视口高度有关的尺寸，避免侵入底部阅读区。
- **短横屏（最小宽度 768px 且最大高度 560px）：** 菜单高度（40px），状态宽度（450px），对话最小高度（66px），手牌区域宽度上限（424px），牌高（104px）。顶部工具保留图标；图例保留关系箭头，解释行隐藏。结算期间状态降低不透明度，中央对决牌与判定文字使用紧凑尺寸。

本次视口证据位于 `.impeccable/review/`，覆盖（1440×900）、（1280×720）、（390×844）和（844×390）。这些是当前屏幕的检查尺寸，不是额外 CSS 断点。

## Elevation & Depth

纸面和卡牌使用同一紫墨色系的柔影与浅色叠层。对话内部还有一圈细描线，签名片以真实重叠关系浮在纸面上缘。背景以轻微紫色渐暗和边缘暗角建立远近；弹层遮罩不使用模糊。旧源码中的玻璃样式已被后置主题覆盖，不能用它推断现行材质。

### Shadow Vocabulary

- **阅读面柔影**（`0 10px 28px rgba(39,18,36,.24)`）：中央状态与对话纸面。
- **手牌静态影**（`0 6px 16px rgba(39,18,36,.2)`）：可出牌卡片。
- **手牌交互影**（`0 10px 20px rgba(39,18,36,.23)`）：悬停或键盘聚焦的手牌，配合上移（6px）；按下时回落至上移（2px）。
- **弹层柔影**（`0 14px 36px rgba(39,18,36,.3)`）：结局、场景和配置弹层。
- **判定文字投影：** 仅用于场景上的短暂判定大字，配合状态对应的轮廓色；它不是面板阴影。

牌面过渡与菜单悬停为（0.2s）；交锋指针移动为（0.5s），判定进入为（0.8s），后两者使用已实现的 `cubic-bezier(.16,1,.3,1)`。原有立绘呼吸动画周期为（4.2s），立绘状态过渡沿用原代码。

**The Measured Motion Rule.** 牌面位移、进度变化和判定出现沿用现有时序；减少动态偏好会关闭牌面/指针/计时条过渡与判定、呼吸动画。

## Shapes

现行组件混合使用柔圆角与非对称信笺角。手牌是简洁矩形，使用 card 圆角；工具与设置应用按钮使用 control 圆角。对话的两组相对角分别较小/较大，签名片重复同一方向；状态面板下角比上角更圆。对话内描线和状态下缘细线只承担精细的纸面边界。

心形、普通属性图形、奇策星形、设置和关闭图标均以现有内联 SVG 路径绘制。图标的结构和颜色与文字协同，不将 Unicode 装饰符号作为新图标体系。

## Components

### Buttons

深雾紫设置操作和结局操作与轻量顶部工具并存。

- **Primary：** 场景/配置应用按钮使用前置 button-primary token，常规圆角（8px），实际文字为（12px / 16px；700）。结局按钮采用同一深色填充，但保留较宽内边距（8px 20px）和圆角（12px）。
- **Hover / Focus：** 深色操作悬停转为 plum-hover；原有亮度反馈保留。交互焦点为玫瑰色（2px）描边、外偏移（4px）。
- **Tools：** 顶部透明按钮有浅色细边与浅色 SVG，悬停增加轻微浅色底；桌面高度（32px），手机（44px），短横屏（28px）。
- **Close：** 弹层关闭按钮为透明底、雾紫 SVG，点击区域至少（44×44px）。

### Cards / Containers

手牌用单层纸面表达一项回应，避免多层盒子争夺注意力。

- **Corner Style / Background：** card 圆角与 paper 底；属性颜色仅落在类型、图形和克制文字。
- **Hierarchy：** 左上类型、中上点数或星形、底部名称与短效果；完整效果仍保留在可访问名称与提示中。
- **States：** 悬停和键盘聚焦抬起并显示属性色边框；按下回落；出牌结算期间使用原生 disabled 状态。
- **Match result badge：** 文本型结果徽记使用粉线边框、深玫瑰文字和小圆角；它是非交互状态标签。

### Inputs / Fields

编辑表单使用纸面文本框、细粉边线和可选择文本。链接框为小圆角，JSON 编辑器为（12px）圆角，内边距（12px），最小高度（300px）。placeholder 使用次级墨色并保持完整不透明度；焦点沿用通用玫瑰描边。配置解析错误显示中文修正指导，并设置 `aria-invalid="true"`；错误修正后重新应用配置。

### Navigation

顶部菜单由游戏名、当前剧情名称、剧情选择和三个工具组成。剧情标题单行省略；剧情选择框桌面宽（202px），手机伸展填充可用空间。手机与短横屏隐藏工具文字，保留实际 SVG、`aria-label` 和提示。音效按钮用 `aria-pressed` 与不同 SVG 声波状态表示开关。

### Romance status

大型纸面状态把回合与男主百分比心率置于左右两栏，中间是细线心形。两项数字同级，心率使用玫瑰色，回合使用深玫瑰。回应提示、倒计时和细进度条横跨下方；心率旁的波形是既有状态反馈，不显示医学单位。状态不是可点击卡片。

### Letter dialogue

宽幅纸面台词框左对齐阅读；说话人签名片以绝对定位跨越上缘，角色侧标与姓名同行。对方签名使用雾紫；女主发言时切换到代码内已有的玫瑰紫（`#914d6a`）。纸面内部细线和右下线描心形不覆盖正文。

### Directed counter legend

常驻图例用紧凑纸面排列三组定向关系，箭头指向被克制一方。普通手牌的悬停或键盘聚焦会给对应关系添加浅粉底和属性色下划线；离开后恢复。图例从实际配置读取关系，不复制一套独立规则。解释行位于关系下方，短横屏按现行实现隐藏。

## Do's and Don'ts

### Do:

- **Do** 以纸色提供阅读面，以墨色和次级墨色承载正文与功能说明。
- **Do** 在当前对局保留回合、百分比心率、对话和四张手牌之间已实现的视觉层级。
- **Do** 让属性色同时标识手牌与对应克制箭头，并同时保留文字与 SVG 图形。
- **Do** 保留输入焦点、可选择的编辑文本和中文错误修正指导。

### Don't:

- **Don't** 把柔金装饰线扩展成正文、关键数字或按钮主文字颜色。
- **Don't** 给当前简洁手牌添加会挤压点数、名称或短效果的大幅卡面装饰。
- **Don't** 将现行百分比心率写成 BPM。
- **Don't** 将被覆盖的旧玻璃/金色样式或隐藏的皇冠与动作气泡当成新界面的公共组件。

