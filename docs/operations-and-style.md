# O / S：范围与使用说明

交付 43 个 O 操作、12 个 S 维度。数量描述当前工作目录，不宣称语言表达只有这些可能性，也不是从既有标准复制的完整清单。

## 层级不是三个同构的树

- P 问这段话在做什么。O 问可观察的哪些局部组织手段在帮助它实现。S 问这些手段共同呈现什么表达取向。
- O 的七组是检索分组，非互斥本体。一个操作可服务多个 P；一句话可有多个 O。O 与 P 的词面可能相同，但标注单位和条件不同。完整的解释行为可能是 P；其中展开因果机制是 O。不能因为出现“解释”一词，就自动贴 O。
- S 的十二条是维度，每条包含两端和中间设置，不把两端当两个类别来凑数。它们不是已经证明独立的心理测量尺度；维度之间可能相关。
- 暂无充分线索时，应记“未知”，而不是默认为中间值。一个文本也可先严厉后缓和；先划片段，再概括主导风格。
- 愤怒、悲伤是情绪，不直接列为 S。情感外显度描述的是表达形式，而非推测真实心理。恳切、庄重、冷嘲等常见风格词可保留为原始描述或维度组合，不自动多算维度。
- 此版本未把专业、法律、学术、广告、亲子等场景／语域名称堆进风格计数。正式程度与术语密度可描述其部分差异，不声称穷尽语域。

## 判别顺序

1. 找到一段可定位原文，记录前后文与角色。
2. 先独立判断 P，再指认 O 的文字证据，不从 P 机械生成 O。
3. 对 S 作局部判断，记录取向及依据；风格是可变设置，不是给说话者贴人格标签。
4. 对边界项写出邻近解释及排除理由。若无法排除，保留多解，不制造唯一答案。

## 两个跨轴例子（均为构造）

“价格确实高，但寿命更长，建议再比较总成本。”可以是建议 P，使用让步后转折、同标准对比 O；呈现相对缓冲的 S。不能把“但”本身当作目的。

“请今天发来；如果来不及，我们再协调。”仍是直接请求，且有较高面子缓冲。直接度与缓冲度不可折成单一“直接—委婉”轴。

## 对照例句是什么

所有新增例句明确标“构造”（源数据使用 constructed，发布版统一中文），是判别教学用的构造材料，不冒充语料证据。O 对照意在展示有无该操作或最近邻；S 对照尽量保持目的和事实相近，但不声称已做实验性控制。真实来源语料的旧 case ID 不变；此任务未改动 cases.json。

## 来源锚点与证据限度

以下是概念锚点，而非对整个自建目录的学术背书。没有逐项文献支持的条目仍标“操作化草案／维度草案”。

- [Mann & Thompson, 1988, Rhetorical Structure Theory](https://www.sfu.ca/rst/05bibliographies/bibs/Mann_Thompson_1988.pdf) 及 [RST 关系定义](https://www.sfu.ca/rst/01intro/definitions.html)：提供研究文本片段之间关系的先例。可对照本目录的证据、背景、让步、条件、重述、摘要、顺序等；本项目将其转为表达操作视角，不声称等同 RST 标注。
- [Searle, Indirect speech acts, Expression and Meaning (1979)](https://www.cambridge.org/core/books/expression-and-meaning/indirect-speech-acts/3B4C771A853B6A3347C0F7D8A3602D41)：支持不把句法形式直接等同交际行为的区分；与反问、意图直接度相关。
- [Danescu-Niculescu-Mizil et al., 2013, A computational approach to politeness](https://aclanthology.org/P13-1025/)：在请求语料中研究礼貌与语境及语言特征的联系，提醒不能靠单个“请”字判礼貌。此处缓冲维度不是复现其模型，也不能推出跨文化通用量表。
- [Rao & Tetreault, 2018, GYAFC](https://aclanthology.org/N18-1012/)：以正式／非正式配对材料研究风格转换，为配对呈现提供方法参考；不支持将本项目十二维都称作已验证维度。

## 接口

operations.json 与 dimensions.json 均为 {axis, groups:[{id,name,definition,entries:[]}]}。
条目共用 id/name/definition/boundary/parentReason/aliases/status/example。O 的 pairedExamples 是 withOperation/withoutOrNeighbor 对象，S 是 setting/text/kind/context 数组。整合器可归一化显示。
legacy-mapping.json 保留 8 个旧 O ID；S 旧标签映射到维度设置。earnest 不自动映射，必须逐例复核，不删除旧案例原始描述。
