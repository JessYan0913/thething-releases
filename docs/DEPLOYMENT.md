# TheThing 落地页 — 部署到 Vercel

本仓库的 Next.js 应用是 TheThing 的官方落地页（`app/`），部署在 Vercel 上。

## 本地开发

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## 部署到 Vercel

### 方式一：Vercel Dashboard（推荐，零配置）

1. 打开 [vercel.com/new](https://vercel.com/new)，导入 GitHub 仓库 `JessYan0913/thething-releases`。
2. Framework Preset 会自动识别为 **Next.js**，无需额外配置（Root Directory 保持 `/`）。
3. 点 **Deploy**，完成后得到一个 `*.vercel.app` 域名。

> 每次 push 到 `main` 分支会自动触发重新部署。

### 方式二：Vercel CLI

```bash
pnpm dlx vercel login
pnpm dlx vercel --prod
```

## 环境要求

- Node.js ≥ 20（Vercel 默认即可）
- 包管理器：pnpm（`package.json` 已声明 `packageManager`，Vercel 自动识别）

## 版本号如何保持最新

落地页的版本号与下载链接**不需要人工维护**：

- 页面内置兜底版本（`app/lib/release.tsx` 中的 `DEFAULT_RELEASE`，当前 v0.12.3）；
- 页面加载时通过 `ReleaseProvider` 请求
  `https://api.github.com/repos/JessYan0913/thething-releases/releases/latest`
  获取最新 Release，实时更新下载区与 Hero 的版本徽标；
- 请求失败时自动回退到内置版本，不影响可用性。

发布新版本（打 tag 触发源码仓库的 Release workflow）后，落地页会自动显示新版本，
无需重新部署。

## 域名

默认使用 Vercel 分配的 `*.vercel.app` 域名。如需自定义域名（如 `thething.cn`），
在 Vercel 项目的 Settings → Domains 中添加并配置 DNS 即可。

## 与 Release workflow 的关系

- 源码仓库的 `release.yml` 每次发版只更新本仓库的 `README.md`（通过 GitHub
  Contents API），**不会**删除或覆盖落地页代码；
- 落地页只读 Release 资产（`latest.json` / dmg / exe），发布流程无需感知落地页。
