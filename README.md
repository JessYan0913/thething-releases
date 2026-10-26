# TheThing

> 别人卖 AI 工具，我们派 **AI 员工**——住进你的企业，数据不出内网，按省下的人力收费，越用越懂你。

工具要人用，员工替你干活。TheThing 给你公司派一个 AI 员工：给它目标，它自己拆解、自己干、干完汇报；危险动作先问过你；干过的活沉淀成你公司的知识，越干越懂你。

> 🌐 **完整落地页**：[thething-releases.vercel.app](https://thething-releases.vercel.app) — 产品介绍、下载与私有化部署咨询

## ⬇️ 下载最新版 v0.14.1

| 平台 | 下载 |
| --- | --- |
| macOS Apple Silicon（M 系列） | [TheThing-0.14.1-arm64.dmg](https://github.com/JessYan0913/thething-releases/releases/download/v0.14.1/TheThing-0.14.1-arm64.dmg) |
| macOS Intel | [TheThing-0.14.1.dmg](https://github.com/JessYan0913/thething-releases/releases/download/v0.14.1/TheThing-0.14.1.dmg) |
| Windows x64 | [TheThing-0.14.1-win-x64.exe](https://github.com/JessYan0913/thething-releases/releases/download/v0.14.1/TheThing-0.14.1-win-x64.exe) |

- 历史版本：[Releases 页面](https://github.com/JessYan0913/thething-releases/releases)
- 版本清单（应用内更新检查用）：[latest.json](https://github.com/JessYan0913/thething-releases/releases/latest/download/latest.json)

### macOS 安装说明

> 应用未签名（ad-hoc），**命令行下载**的 dmg 双击即可直接打开；**浏览器下载**首次打开会报「已损坏」，在终端执行一次后再双击打开：

```bash
xattr -cr '/Applications/TheThing.app'
```

打开 dmg 后把 **TheThing** 拖进「应用程序」，双击即可运行，无需额外设置。

### Windows 安装说明

下载 exe 后直接运行，按向导安装即可。

### 应用内更新

打开 TheThing → **设置 → 关于 → 检查更新**，自动对比最新版本并下载安装包。

## 你得到的是结果，不是功能

- **少养一个人** —— 把重复的、流程化的、需要 24 小时盯着的活交给它。按省下的人力付费，而不是按次数、按 token。
- **数据留在你手里** —— 它住在你的企业内网里，你的数据不进任何人的云。
- **每件事都在你眼皮底下** —— 花钱、改数据、对外发消息，先过你的审批，全程留痕。
- **越用越值钱** —— 它记住你们公司的流程、口径和历史，干得越久越懂你。

## 它在你公司里怎么干活

| 你看到的 | 背后的能力 |
| --- | --- |
| 在企业日常的飞书/微信里直接派活给它 | 飞书/企微/微信连接器（HTTP/WS 入站，支持多机器人实例） |
| 它自己拆目标、一步步干完 | 多步 Agent、子 Agent 并行、目标驱动（Goal） |
| 危险动作先弹给你审批 | 工具审批挂起 + smart / auto-review / full-trust 模式 |
| 干过的活变成公司的知识 | Wiki 知识库 + 用户记忆，跨会话沉淀 |
| 能接你们已有的系统 | MCP 扩展 + 连接器插件（可自定义） |
| 长任务不中断、不失控 | 上下文压缩、对话路线图、定时任务 |
| 桌面 / 网页 / 命令行 / API | 多形态客户端 |

## 🏢 企业私有化部署

AI 员工住进你的企业，而不是住进任何人的云：

- **部署** —— 私有化部署进你的企业内网，数据不出内网，不进任何人的云。
- **接入** —— 接上你公司日常的飞书/微信，在团队协作的地方直接派活、审批、汇报。
- **收费** —— 按省下的人力收费，低于养一个全职员工的成本。
- **联系** —— 商务合作与私有化部署咨询，可通过本仓库主页联系我们。

## 🧰 个人 / 开发者使用

- 下载安装包见上方「⬇️ 下载最新版」；桌面应用内置全部能力。
- 源码仓库保持私有，不对外公开；本仓库是官方发布仓库，产品介绍见上方落地页链接。

### 🧩 安装插件

需要 Node.js ≥ 20。单文件 CLI，零依赖，拷走就能跑：

```bash
curl -sL --compressed \
  https://cdn.jsdelivr.net/gh/JessYan0913/thething-releases@main/cli/thething-0.11.0.mjs \
  -o thething.mjs

node thething.mjs plugin market          # 看看有哪些
node thething.mjs plugin install gomoku  # 装一个
```

也可以在桌面应用里走「设置 → 插件 → 市场」。插件装到 `~/.thething/plugins/`，重启应用生效。

插件清单：

| 名称 | 说明 |
|---|---|
| `event-log` | 把全部 11 类插件事件落成 jsonl，用于排查和回放 |
| `audit-ledger` | 工具调用留痕台账，记录 sessionId / stepIndex / 工具入参 |
| `auto-review` | 自动化审批策略 |
| `feishu` / `wechat` | 飞书、微信连接器 |
| `jev-compaction` | 上下文压缩 |
| `rest-api` | REST 接口连接器 |
| `gomoku` / `tic-tac-toe` / `tank-battle` | 面板插件示例（侧边栏小游戏，演示面板 API） |
| `quote-desk` | 面板插件示例（询价工作台） |

### 🛠 自己做插件

`plugin.json` + `index.js` + `panel.css` 三个文件就是一个面板插件，没有构建步骤。
订阅 `tool.before` / `tool.after` 等事件即可挂到工具调用链路上。

发布到本市场：

```bash
node scripts/publish-panel-plugin.mjs <插件名> --push
```

会校验插件目录、打 tgz、算 sha256、更新 `marketplace/index.json` 并推送。
客户端装包前会硬校验 sha256，不一致直接拒绝。

## 📦 关于本仓库

本仓库是 TheThing 的**官方发布仓库**（独立落地页：[thething-releases.vercel.app](https://thething-releases.vercel.app)）：

- 每次发布（GitHub Actions 自动）：
  - 构建 macOS（arm64/x64）与 Windows（x64）安装包并上传 Release
  - 更新本 README 的版本号与下载链接
  - 生成 `latest.json` 版本清单（应用内更新检查匿名读取）
- 源码仓库保持私有，仅分发编译产物。

## 📄 License

MIT
