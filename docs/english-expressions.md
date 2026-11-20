# 英文动作词与句式

本轮为 P 的 93 项和 O 的 43 项补充英文内容；S 不在本轮范围。原有分组、条目 ID、定义、边界和共同案例保留。英文内容放在 `data/catalogs.json` 对应条目的 `english` 中，与原条目一起显示和检索，不增加第二套分类。

每项包含两组 `word / meaning / pattern`、两条 `en / zh` 例句、简短 `note` 和构造材料标签。共 272 组词与搭配、272 条双语例句；计数包含不同条目中重复出现但搭配或用法不同的词，不是 272 个独立词。

## 选词与阅读

- 以交际动作或局部表达操作为选词中心，保留自然的动词短语，如 `say goodbye`、`offer condolences`、`hold the floor`。不把情绪形容词或主题名词混成动作词表。
- 动作名称和实际话语可以不同。例如 `inform someone that …` 描述告知动作，实际告知可说 “Just letting you know, the meeting has moved to three.”
- 句式中的 `could`、`may`、`would` 作为句式组成保留，不单列为本项目的动作词。
- 描述言语动作、请求别人执行的动作和实际结果分别说明。例如请求澄清用 `ask for clarification` 描述请求者，`clarify` 是请求对方完成的动作；`persuade`、`refute` 在叙述时可能暗示成功，故补充 `try to …` 的用法提示。
- 常用词优先；特定含义缺乏自然单动词时用短语，较正式、技术或论辩用语明确说明。不把近义词列成可在所有场合互换的同义词。
- 保留目录的具体边界，例如观点赞同与行动答应、许可与代表性授权、协商让步与论述转折、暂缓决定与保留判断。英语词义范围可能比此目录项宽，须连同搭配和用法阅读。

所有新增例句、情境和译文均为本项目构造，不冒充真实邮件、专业报告、法规或自然会话。制度性示例假定有相应角色与程序，不能单靠句子认定现实效力。原有共同案例及其来源不作为新增英文例句的来源。

## 参考核查范围

本轮定向查阅 Cambridge Dictionary 检索结果中的用法与搭配，覆盖 [inform](https://dictionary.cambridge.org/dictionary/english/inform)、[notify](https://dictionary.cambridge.org/dictionary/english/notify)、[plead](https://dictionary.cambridge.org/dictionary/english/plead)、[authorize](https://dictionary.cambridge.org/dictionary/english/authorize)、[substantiate](https://dictionary.cambridge.org/dictionary/english/substantiate)。部分网页直接打开返回 403，因此不宣称完成全文查阅，也不宣称逐词经过辞典或语料库验证。本项目没有照搬这些来源的例句。

## 验证

执行：

```sh
python3 scripts/validate.py
node --check js/app.js
node scripts/dom-smoke.cjs
git diff --check
```

DOM 测试使用临时安装的 jsdom，不引入网站运行依赖。新增检查覆盖 P/O 全条目英文结构、双语例句和构造标签，以及英文词、句段、大小写搜索、正文和目录匹配、高亮、S 范围。原有中文简繁搜索、边界展开、旧链接、案例筛选和手机抽屉检查同时通过。

本机真实浏览器还检查了英文区块呈现、`NOTIFY` / `substantiate` / `the app crashes` 搜索，以及 360 × 800 视口下的页面宽度、手机菜单和 Esc 关闭行为。结构与交互验证不等于语言学有效性验证；英文内容仍可按实际使用反馈修订。

## 2026-11-20 内容复核

重新通读了 136 项英文动作词、搭配与 272 条例句，并核对目录定义和相近边界。本轮调整 20 项的英文内容：12 项更换或收紧动作词与用法，另外 8 项修订例句。此数表示有改动的条目，不表示发现了 20 个独立错误。

主要修订：

- 请求澄清、请求复述和请求宽宥的词表统一从请求者的动作出发，分别使用 `ask for clarification / request clarification`、`ask for a repeat / request repetition`、`plead / appeal for leniency`。不再把回应者执行的 `clarify / repeat / spare` 裸列为请求者的同义动作。
- 求证使用 `seek confirmation / ask whether`；肯定确认使用 `confirm / affirm`，区分寻求核实、核验过程与给出肯定确认。
- 反提案、确认共识、平行结构、补入背景和尺度变换等条目改用更自然或方向更明确的动作短语；威胁词表不再将已经造成畏惧或服从混作必要结果。
- 修订纠正事实、直接指控、暂缓决定、收束要点、援引事实、援引专业权威、预置异议和嵌入核对的例句，使其在给定情境中更明确实施相应动作。

定向参考了 Cambridge 的 [clarify](https://dictionary.cambridge.org/dictionary/english/clarify) 和 [counter-offer](https://dictionary.cambridge.org/dictionary/english/counter-offer) 词条检索结果：前者描述使内容清楚的动作；后者提供 `make a counteroffer` 的用法参考。没有复用其例句，也没有把此次复核称作词频或自然语料验证。

修订后再次通过结构检查、JS 语法检查、现有 DOM 交互测试及差异空白检查。原分类与共同案例未作改动。
