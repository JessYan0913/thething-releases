# TheThing

> 别人卖 AI 工具，我们派 **AI 员工**——住进你的企业，数据不出内网，按省下的人力收费，越用越懂你。

工具要人用，员工替你干活。TheThing 给你公司派一个 AI 员工：给它目标，它自己拆解、自己干、干完汇报；危险动作先问过你；干过的活沉淀成你公司的知识，越干越懂你。

> 🌐 **完整落地页**：[thething-releases.vercel.app](https://thething-releases.vercel.app) — 产品介绍、下载与私有化部署咨询

## ⬇️ 下载最新版 v0.16.2

| 平台 | 下载 |
| --- | --- |
| macOS Apple Silicon（M 系列） | [TheThing-0.16.2-arm64.dmg](https://github.com/JessYan0913/thething-releases/releases/download/v0.16.2/TheThing-0.16.2-arm64.dmg) |
| macOS Intel | [TheThing-0.16.2.dmg](https://github.com/JessYan0913/thething-releases/releases/download/v0.16.2/TheThing-0.16.2.dmg) |
| Windows x64 | [TheThing-0.16.2-win-x64.exe](https://github.com/JessYan0913/thething-releases/releases/download/v0.16.2/TheThing-0.16.2-win-x64.exe) |

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
- CLI 交互：`npm i -g @the-thing/cli && thething --help`（需要 Node.js ≥ 20）。
- 源码仓库保持私有，不对外公开；本仓库是官方发布仓库，产品介绍见上方落地页链接。

## 📦 关于本仓库

本仓库是 TheThing 的**官方发布仓库**（独立落地页：[thething-releases.vercel.app](https://thething-releases.vercel.app)）：

- 每次发布（GitHub Actions 自动）：
  - 构建 macOS（arm64/x64）与 Windows（x64）安装包并上传 Release
  - 更新本 README 的版本号与下载链接
  - 生成 `latest.json` 版本清单（应用内更新检查匿名读取）
- 源码仓库保持私有，仅分发编译产物。

## 📄 License

MIT
