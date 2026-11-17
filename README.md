# 语言表达分类体系
## Communicative Acts · Purposes, Operations & Styles

**人类通过语言做什么、怎样组织表达、以什么风格表达？**

这是一份从具体处境与语言材料中生长的研究目录，不是表达技巧大全，也不是已经穷尽人类行为的分类标准。项目名：`communicative-acts-taxonomy`。当前版本：**0.1 研究起步版**。

网页发布地址：<https://liamamilin.github.io/communicative-acts-taxonomy/>（由 Actions 部署）。

先看两个问题：同样说“你怎么能这样”，何时是在问原因，何时是在指责？同样说“请再给他一次机会”，何时是在普通请求，何时是在求情？先记录材料和反例，再决定需要哪些类别。

### 从哪里开始
- [三条轴怎么一起使用](docs/three-axes.md)：P 目的、O 操作、S 风格。
- [指责及其邻近行为](clusters/blame.md)：指责、批评、责备、控诉、谴责，不只按语气轻重排列。
- [求情及其邻近行为](clusters/pleading.md)：请求、恳求、求情、求饶、哀求，检验处置权与受益人。
- [如何研究与贡献](docs/research-method.md)：先收集，再辨析；允许未知、重叠与分歧。
- [P / C / O 与其他轴](docs/scope.md)：行为不等于形式、风格、内容或效果。
- [证据与参考文献](docs/sources.md)：原文出处、文学材料的限制、学术参照。
- [下一步](docs/roadmap.md)：以材料覆盖和反例为进度，不追求凑齐词数。

### 本版有什么
P / O / S 三个并列目录：10 个行为目的候选、8 个表达操作、6 个表达风格，共享 4 条有来源文本案例与 10 条明确标注的构造案例。候选词条只是待检验的词义区分；研究簇是工作入口，不是一级类目。文学作品中的人物话语不等于真实口语录音。所有分析属于本项目的解释，不冒充原作者标注。

### 本地浏览与检查
```sh
python scripts/validate.py
node --check js/app.js
python -m http.server 8000
```
在浏览器打开 http://localhost:8000 。可搜索词条与案例、按研究簇和证据类型筛选；详情可深链接。无构建依赖、无分析追踪、无外部字体。直接双击 HTML 受浏览器 fetch 限制，请用本地服务器。

### 结构与参照
沿用 [semantic-direction-taxonomy](https://github.com/liamamilin/semantic-direction-taxonomy) 的静态目录结构：`index.html`、`data/`、`js/`、`css/`、`scripts/validate.py`。本项目代码与内容重新编写，不复制其完整分类树，不改动原仓库。JSON 是可变的浏览载体，不是学术 Schema 定稿；详细论证保留在 Markdown 中。

### 发布与授权状态
目标为所有者已建立的公开仓库 `liamamilin/communicative-acts-taxonomy`，通过 GitHub Actions 校验并部署 GitHub Pages。代码内不包含密钥或私人语料。当前不替所有者选择开源许可证；引用原文的权利说明见 [来源说明](docs/sources.md)，不能把古典材料与本站原创内容的授权混为一谈。
