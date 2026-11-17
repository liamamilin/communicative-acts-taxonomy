# 语言表达分类体系
## Communicative Acts · P / O / S

**人类通过语言做什么、怎样组织表达、以什么风格表达？**

网页：<https://liamamilin.github.io/communicative-acts-taxonomy/>

本版从“指责/求情”两簇样例扩展成可用的功能地图。P 是主要入口，O 和 S 并列浏览；内容暂不另建目录。

| 轴 | 当前规模 | 计数单位 |
|---|---|---|
| P 目的 | 12 组，93 项 | 交际功能叶子；别名不重复计数 |
| O 操作 | 7 组，43 项 | 可组合的局部表达操作 |
| S 风格 | 5 组，12 维 | 可调维度；各端取值不重复计数 |

这些数字是本版的工作目录规模，不是“人类只有这些行为”的结论。三个轴单位不同，不相加宣传成一种统一类别数。每项包括定义、归组理由、近邻边界及明确标注的例句。

## 从具体问题开始
- 问路是在索取信息，不应因为句子里有“请”就只标一般请求。
- 商量预约可能包含提议、反提案、接受方案和确认共识，是多回合活动，不另造一个无条件原子行为。
- 道歉不以对方已经原谅为前提；求情被拒绝仍是求情。
- “我允许”与“我授权”不同；真实制度效力需核验资格、程序和范围。
- “我还没说完”可是在保持话轮，不等于反对对方的内容。

## 阅读路线
- [P 的分类方法与覆盖](docs/purpose-method.md) / [32 个场景的边界检查](docs/coverage.md)
- [三个轴如何共同工作](docs/three-axes.md)
- [范围与概念层次](docs/scope.md)
- [O / S 的维度和操作边界](docs/operations-and-style.md)
- [指责深描](clusters/blame.md) / [求情深描](clusters/pleading.md)
- [研究方法](docs/research-method.md)、[来源](docs/sources.md)、[下一步](docs/roadmap.md)
- [验收记录](docs/verification.md)

目录例句主要是构造的教学对照，不能冒充自然语料。共同案例库共 20 条记录，其中 10 条有出处的古典、文学或制度性文本片段、10 条构造材料。古典与文学对话不等于真实历史录音；制度性文本片段也不能代表日常会话分布。原话、行为分析、实际结果分开保存。

## 浏览方式
默认进入 P；按功能组浏览，或搜索名称、别名、定义、边界与例句。支持常用简繁词的规范化检索。切换 P/O/S 可查看同一案例的不同侧面；每个案例保留稳定 `#case-Q01` 等深链接。

## 本地运行
```sh
python scripts/validate.py
node --check js/app.js
python -m http.server 8000
```
打开 http://localhost:8000 。站点本身无构建依赖、无外部字体、无分析追踪。不要直接双击 HTML，浏览器可能阻止读取 JSON。

可选 DOM 交互验收（测试依赖不进入网页）：
```sh
npm install --prefix /tmp/taxonomy-test jsdom
node scripts/dom-smoke.cjs
```
可选真实浏览器验收：安装 Playwright 与 Chromium 后运行 `node scripts/browser-smoke.cjs`。支持 `BASE_URL`、`CHROMIUM_PATH`、`SCREENSHOT_PATH`。DOM 测试不代替视觉或真实浏览器验收。

## 结构与发布
沿用 [semantic-direction-taxonomy](https://github.com/liamamilin/semantic-direction-taxonomy) 的静态目录思路，代码和分类内容重新编写。数据在 `data/catalogs.json` 与 `data/cases.json`，论证保留在 Markdown。JSON 是可修订的运输格式，不是本体标准定稿。

GitHub Actions 先做完整性检查，再只将 `index.html`、`css/`、`js/`、`data/` 发布到 Pages。源仓库公开；站点不收集用户信息。原创代码/文本未另行授予开源许可证；古典引文与现代研究材料的来源权利说明见 [来源](docs/sources.md)。
