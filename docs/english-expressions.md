# 英文动作词与句式

本轮为 P 的 93 项和 O 的 43 项补充英文内容；S 不在本轮范围。原有分组、条目 ID、定义、边界和共同案例保留。英文内容放在 `data/catalogs.json` 对应条目的 `english` 中，与原条目一起显示和检索，不增加第二套分类。

每项包含两组 `word / meaning / pattern`、两条 `en / zh` 例句、简短 `note` 和构造材料标签。共 272 组词与搭配、272 条双语例句；计数包含不同条目中重复出现但搭配或用法不同的词，不是 272 个独立词。

## 选词与阅读

- 以交际动作或局部表达操作为选词中心，保留自然的动词短语，如 `say goodbye`、`offer condolences`、`hold the floor`。不把情绪形容词或主题名词混成动作词表。
- 动作名称和实际话语可以不同。例如 `inform someone that …` 描述告知动作，实际告知可说 “Just letting you know, the meeting has moved to three.”
- 句式中的 `could`、`may`、`would` 作为句式组成保留，不单列为本项目的动作词。
- 描述言语动作、请求别人执行的动作和实际结果分别说明。例如请求澄清中的 `clarify` 是请求对方完成的动作；`persuade`、`refute` 在叙述时可能暗示成功，故补充 `try to …` 的用法提示。
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
