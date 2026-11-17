# 本版检查记录

- 2026-11-17：`python scripts/validate.py` 通过：24 词条、3 轴、14 案例；交叉引用、来源标识及本地链接。
- `node --check js/app.js` 通过。
- 浏览器自动验收脚本已提供，但本执行环境 Chromium 无法创建 socket，启动失败；未声称 UI 验收通过。
- 可在有 Playwright 与 Chromium 的环境启动 HTTP 服务，再运行 `node scripts/browser-smoke.cjs`。支持 BASE_URL、CHROMIUM_PATH、SCREENSHOT_PATH 环境变量。覆盖三轴切换、来源筛选、空结果、重置、深链接与刷新、研究簇筛选、手机横向溢出及页面报错。
- 自动检查只保证资料结构完整，不证明语言学判定为真。跨标注者复核尚未进行。
