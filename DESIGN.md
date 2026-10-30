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
  dialogue-action: "#633b55"
  dialogue-action-hover: "#80516c"
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
  hud: "25px 25px 14px 14px"
  dialogue: "22px"
  speaker: "4px"
  dialogue-control: "5px"
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
  button-dialogue:
    backgroundColor: "{colors.dialogue-action}"
    textColor: "{colors.ink}"
    rounded: "{rounded.dialogue-control}"
    padding: "6px 14px"
  button-dialogue-hover:
    backgroundColor: "{colors.dialogue-action-hover}"
  button-story-continue:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.on-plum}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
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

用户已明确否定大面积纯白实底。V7 在已接受的 V6 世界内合并生成金属／晶石细边框与 H02 人物、咖啡厅素材，仍使用实时 HTML 台词、姓名、回合、百分比心率与牌值。原三套演示及其原人物／背景保留，十回合规则不变。具体对局及 H02 表演约束见 `.impeccable/surfaces/duel.md`；当前规范来自最终 `dist/assets/duel-ui.css`、`cards.css` 与最后加载的 `h02-ui.css`，后者的共用框架覆盖决定现行形状。

证据分版记录：V6 文档当时仅有源码取值、尚无 V6 新截图，这项历史事实保留。V7 已有五个尺寸的刷新开场图，另有 +1 阈值 DOM 暂停／锁牌证据、完整十回合负局和共同离场记录。`FINISH_REVIEW.md` 与 `VERDICT_PASS.md` 只对女主替换、程严桌面接地两项修复给出可交付结论，不代表判定峰值、+3／+5、短横屏可出牌状态或所有动效的视觉通过。

**Key Characteristics:**

- 烟紫与玫瑰色半透明面板、浅粉正文、柔金细线。
- 自托管中文宋体与紧凑的无衬线功能说明并用。
- 生成金属／晶石细边框、独立说话人签名片和实时细线心形。
- 简洁深色手牌与克制图例共享较浅属性色和明确箭头。

## Colors

前置 tokens 是颜色数值的规范来源；烟紫、玫瑰与属性色延续 V6。渐变的完整实现保存在 sidecar 组件预览中；V7 生成框的柔金／玫瑰细节来自图片，不另虚构一套位图颜色 token。

### Primary

- **心动玫瑰（rose）：** 心率大数字、心形轮廓、通用焦点与关键 SVG。
- **浅玫瑰（rose-light）：** 回合读数、牌面点数、标题、交锋值与结果文字。
- **玫瑰紫（plum / plum-hover）：** 场景、配置、结局及继续剧情按钮；悬停使用较亮的玫瑰紫。
- **对白玫瑰紫（dialogue-action / dialogue-action-hover）：** 逐句对白推进按钮及其悬停，保持与主操作同族但使用最终源码中的独立色值。

### Secondary

- **浅直球粉 / 浅试探金 / 浅掩饰青（direct / subtle / rational）：** 普通牌类型、图形、克制说明及对应图例。试探金是属性色，与装饰柔金分开。
- **浅凝视紫 / 浅逆转桃（gaze / reversal）：** 两种奇策牌的局部语义色。

### Tertiary

- **柔金（gold-soft）：** 保留的装饰 token；V7 已隐藏旧状态下缘 CSS 细线，新的金属边缘来自生成框图。
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
- **Label：** 可见功能说明以（11px）为下限；桌面状态标签（12px / 1.3）。对白段落／语气说明使用无衬线（12px / 1.5），手机和短横屏（11px）。后置可读性规则覆盖较小的早期选择器值。
- **Dialogue action：** 推进按钮使用宋体（400；14px / 1.4），手机和短横屏（12px）；继续剧情使用（400；14px / 1.5）。
- **Card rank：** 普通牌点数（400；38px / 1）；手机（29px），短横屏（23px）。奇策位置使用 SVG 星形。
- **Wordmark：** 游戏名（400；28px / 1），手机（25px），短横屏（23px）。

## Layout

舞台跟随当前视口（100dvh）。顶部菜单之下是单列三行网格：状态、可伸缩场景和底部交互。背景覆盖舞台，人物分居两侧。桌面菜单高度（52px），顶部居中状态宽度上限（640px），中下部宽幅对话上限（1120px），交锋轨道上限（760px），图例与四张等宽手牌所在区域上限（620px）。

重复间距沿用（4 / 6 / 8 / 12 / 24px）；状态、对话与签名片保留各自内边距。

- **手机（最大宽度 767px）：** 菜单两行，最小高度（96px），工具高度（44px）。状态与对话全宽；状态中央通道（42px）。非对白队列时台词框最小高度（114px），对白阅读时（146px），长句可继续撑高。四张牌同排、间隙（6px）、牌高（128px）。底部使用 `env(safe-area-inset-bottom)`。H02 立绘高度分别为 `min(52dvh,440px)` 与 `min(48dvh,406px)`，站位保留面部空间。
- **短横屏（最小宽度 768px 且最大高度 560px）：** 菜单（40px），状态宽（450px），非对白队列时台词框最小高度（66px），对白阅读时（90px）。手牌可出牌时宽度上限（424px）、牌高（104px），对白阅读期间隐藏整个手牌区。工具显示 SVG，规则解释行隐藏；结算时状态降至（0.1）不透明度。

桌面对白阅读最小高度为（140px）。H02 左侧人物宽（42vw）、高 `min(80dvh,820px)`；右侧宽（42vw）、高 `min(74dvh,760px)`，在宽至少 768px 且高 561–800px 时抬高坐姿基线。前景桌面根据相同立绘高度向视口边缘延展，具体计算及图片引用在 sidecar 的 H02 桌面组件中。

V7 开场图位于 `.impeccable/review/v7/`：`desktop.png`（1440×900）、`mobile.png`（390×844）、`landscape.png`（844×390）、`user-1280.png`（1280×720）、`user-793.png`（793×1084），均为顶部开场状态，图片加载与视口数据见 `viewport-checks.json`。这五个尺寸用于检查，不新增断点。开场截图不能替代判定峰值、+3／+5 或短横屏可出牌状态验收；+1 的暂停／禁用由实际页面 DOM 记录，阈值全部规则由 Node 验证。

## Elevation & Depth

多段烟紫／玫瑰渐变、透明叠层、生成金属／晶石框和柔影共同构成深度，背景仍可从承载层透出。V7 用生成框替换旧状态／对话 CSS 细描线，跨越上缘的签名片保持真实叠放；H02 隐藏两侧独立姓名牌，原演示仍使用深色半透明姓名牌。弹层采用更实的深紫阅读面与有色遮罩，现行覆盖层将背景模糊设为 none；旧玻璃声明不是新材质依据。

### Shadow Vocabulary

- **状态与对话柔影**（`0 12px 30px rgba(10,7,18,.3)`）：主要阅读层。
- **手牌静态影**（`0 6px 16px rgba(9,6,17,.3)`）：可出牌卡片。
- **手牌交互影**（`0 10px 20px rgba(9,6,17,.4)`）：悬停/键盘聚焦，配合上移（6px）；按下回落至上移（2px）。
- **弹层柔影**（`0 14px 36px rgba(39,18,36,.3)`）：结局、场景与配置弹层。
- **姓名牌柔影**（`0 5px 14px rgba(39,18,36,.18)`）：原三套演示的两侧姓名牌；H02 隐藏该组件。
- **H02 人物柔影**（`drop-shadow(0 12px 17px rgba(24,16,22,.25))`）：人物 PNG 的轮廓投影，最终 CSS 统一覆盖旧数值状态发光。
- **判定文字投影：** 短暂判定大字配合状态描边，不作为面板阴影。

手牌与菜单悬停（0.2s），交锋指针（0.5s），判定进入（0.8s），后两者使用 `cubic-bezier(.16,1,.3,1)`。既有立绘呼吸周期（4.2s）。H02 共同离场将程严立绘淡出（0.8s ease），不据此宣称影片动作已经制作。

**The Measured Motion Rule.** 牌面位移、进度变化和判定出现沿用现有时序；减少动态偏好会关闭牌面／指针／计时条过渡与判定、呼吸动画，并关闭 H02 离场淡出过渡。

## Shapes

V7 的 HUD、对话、说话人片采用前置 hud、dialogue、speaker token 的现行圆角，最后加载的 ID 选择器同时覆盖旧桌面、手机和短横屏形状；不能继续把 V6 非对称圆角写成现行 HUD／台词框规范。生成框的 PNG 透明轮廓决定装饰边缘，不等于底层 CSS 圆角。原三套演示姓名牌继续使用 nameplate 的非对称角；手牌保留 card 圆角，逐句推进按钮使用 dialogue-control 的轻圆角。

心形、属性图形、奇策星形、设置与关闭图标使用现有内联 SVG。保留文字与图形协作；旧设置表单中的方向 emoji 不扩展为公共图标体系。

## Components

### Buttons

玫瑰紫应用按钮、逐句推进按钮与透明顶部工具并存。

- **Primary：** 使用前置 button-primary token，文字（12px / 16px；700）。结局按钮保留较宽内边距（8px 20px）和圆角（12px）。
- **Hover / Focus：** 应用按钮悬停使用 plum-hover，并保留已有亮度反馈；通用焦点是玫瑰描边（2px）、外偏移（4px）。
- **Dialogue advance：** 使用 button-dialogue 与其 hover token，玫瑰细边，最小高度桌面（36px）、手机（44px）、短横屏（28px）；手机内边距（6px 10px），短横屏（3px 10px）。按钮文案随队列显示“继续对话”“开始交锋”“继续交锋”或“读完这一幕”。
- **Story continue：** 结果确认后的“继续剧情”使用 button-story-continue token，悬停沿用 plum-hover，读完局后内容与共同离场再显示结束面板。
- **Tools：** 透明底、浅色细边和 SVG；悬停增加轻微浅色底。桌面高度（32px），手机（44px），短横屏（28px）。
- **Close：** 弹层关闭按钮使用透明底、浅色 SVG，点击区至少（44×44px）。

### Cards / Containers

手牌以深紫渐变承载一项回应，生成卡框作为同一功能牌的细边装饰。

- **Material：** 保留深紫渐变、浅色正文与属性色；V7 细边使用（rgba(239,205,222,.22)），`ui-card.png` 全尺寸覆盖层不透明度（0.67）。完整渐变和框图见 sidecar，前置组件 token 不用单色替代渐变。
- **Hierarchy：** 左上类型，中上点数或星形，底部名称与短效果；完整效果保留在可访问名称与提示中。
- **States：** 悬停／聚焦抬起、加深柔影并显示属性色边框；按下回落，结算及对白期间使用原生 disabled。对白状态手牌不透明度（0.48），计时进度（0.4）；短横屏改为隐藏手牌区。
- **Match result badge：** 玫瑰细线、浅玫瑰文字和小圆角，非交互状态标签。

### Inputs / Fields

编辑字段使用深紫底、浅字和细玫瑰边。链接框是 field 圆角；JSON 编辑器为（12px）圆角、内边距（12px）、最小高度（300px）。placeholder 为完整不透明度的次级粉墨。保留可选中文本、通用焦点与 `aria-invalid="true"` 错误状态，解析失败提供中文修正指导。

### Navigation

顶部菜单包含游戏名、当前剧情名称、剧情选择与三个工具。H02 是默认选项，另外三项仍指向原演示。剧情名称单行省略；选择框桌面宽（202px），手机填充剩余宽度，原生选项使用实色烟紫底。手机与短横屏隐藏工具文字，保留 SVG、`aria-label` 和提示；音效开关由 `aria-pressed` 与声波状态表达。

### Romance status

中央心形连接同级大回合数与百分比心率，回合为浅玫瑰，心率为心动玫瑰。状态背景保留四段横向烟紫渐变，`dist/assets/h02/ui-status.png` 替换旧细边与下缘细线，按面板宽高铺满；桌面装饰层向外延展（-12px -7px -5px），手机（-7px -2px -3px），短横屏（-5px -4px -3px）。回应提示、倒计时与细进度横跨底部；对白期间明确写“暂停”。波形仍是游戏百分比状态反馈，状态面板不可点击。

### Dialogue panel and speaker tab

宽幅台词框保留三段烟紫／玫瑰半透明渐变和左对齐正文，`dist/assets/h02/ui-dialogue.png` 全尺寸覆盖替换内描线；旧右下线描心形隐藏。独立签名片跨越上缘，侧标与姓名同行并居中，`ui-speaker.png` 装饰层向外延展（-4px -7px），子文字置于其上。姓名签最小宽度桌面／短横屏（184px）、手机（150px），双方底层渐变仍随 data-speaker 切换。

对白控制行将段落／语气说明和继续按钮分列，桌面间距（18px）、上边距（12px），手机分别（8px）、（8px），短横屏上边距（4px）。按钮、台词与旁白都是真实文本，生成图不含固定功能标签。播放器使用逐句队列而非影片播放控件。H02 两侧独立姓名牌隐藏；原演示继续保留姓名牌和原人物图像。

### H02 portrait and foreground table

人物素材保持原比例并按头部位置对齐，H02 使用自然女主表情与数值男主状态，通用烟紫体系不改变该优先级。`dist/assets/h02/table-front.png` 是程严基础生成图的桌面裁切衍生，由 `data-table=true` 控制，延续当前生成程严图的前景桌面至视口边界。图片层建立独立叠放上下文，桌面置于人物图下方；手动换成其他男主图片时关闭延展。具体高度变量、边界计算、561–800px 高度适配与纹理源路径见 sidecar；这套合成仅属于 H02。

### Directed counter legend

图例使用烟紫半透明面，三组箭头指向被克制一方；关系直接读取真实配置。普通手牌悬停或聚焦时，对应关系显示半透明玫瑰底与属性色下划线，离开后恢复。解释行位于关系下方，短横屏隐藏；普通推进、碾压条件、阈值和回合上限保持既有规则。

## Do's and Don'ts

### Do:

- **Do** 用烟紫与玫瑰色半透明面承载阅读，以浅色正文和说明保持场景上的可读性。
- **Do** 保留顶部中央回合/百分比心率、中下部宽幅对话、图例与四张简洁手牌的现行层级。
- **Do** 让属性色同时标识手牌和对应克制箭头，并保留文字与 SVG 图形。
- **Do** 保留原三套演示的场景／人物映射、字体及其 OFL 授权、输入焦点和中文错误指导。
- **Do** 用生成框承接实时 HTML 标签和数值，保留对白推进、暂停和手牌禁用的清楚反馈。

### Don't:

- **Don't** 恢复大面积纯白实底面板或用背景模糊替代现行有色承载层。
- **Don't** 把柔金装饰色扩展成正文、关键数字或按钮主文字颜色。
- **Don't** 给简洁手牌添加会挤压点数、名称与短效果的大幅装饰。
- **Don't** 将百分比心率写成 BPM，或把 V7 截图和静态色值检查追溯为 V6 渲染验收。
- **Don't** 把两项修复范围内的 ship 结论扩大为判定峰值、+3／+5、所有动效或媒体制作通过。
- **Don't** 将被覆盖的旧玻璃/金色样式、隐藏皇冠与动作气泡、旧表单 emoji 当成新公共组件。
