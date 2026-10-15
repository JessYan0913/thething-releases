import marketplace from '../../marketplace/index.json'

// ============================================================
// 插件市场模块 — 展示 TheThing 官方插件（数据源：marketplace/index.json）
// 与 TheThing 应用内「插件市场」共用同一份清单，保证落地页与客户端一致。
// ============================================================

interface MarketPlugin {
  id: string
  name: string
  description: string
  version: string
  official?: boolean
}

const ICONS: Record<string, string> = {
  'event-log': '📜',
  'audit-ledger': '🗂️',
  'auto-review': '✅',
  feishu: '💬',
  'jev-compaction': '🧠',
  'rest-api': '🔌',
  wechat: '💬',
}

const CATEGORY: Record<string, string> = {
  'event-log': '可观测性',
  'audit-ledger': '审计合规',
  'auto-review': '自动化审批',
  feishu: '连接器',
  'jev-compaction': '上下文压缩',
  'rest-api': '连接器',
  wechat: '连接器',
}

export default function Plugins() {
  const plugins = (marketplace.plugins ?? []) as MarketPlugin[]

  return (
    <section className="section" id="plugins">
      <div className="container">
        <div className="section-head center">
          <div className="section-kicker">插件市场</div>
          <h2 className="section-title">装上即用，扩展你的 AI 员工</h2>
          <p className="section-sub">
            官方插件随产品持续交付，可一键安装。打开 TheThing 插件管理页，在「市场」标签点击安装即可。
          </p>
        </div>

        <div className="card-grid plugin-grid">
          {plugins.map((p) => (
            <div className="value-card plugin-card" key={p.id}>
              <div className="plugin-card-head">
                <div className="ico" aria-hidden>
                  {ICONS[p.id] ?? '🧩'}
                </div>
                <span className="plugin-cat">{CATEGORY[p.id] ?? '插件'}</span>
              </div>
              <h3>{p.id}</h3>
              <p className="plugin-desc">{p.description.replace(/^TheThing 官方插件：/, '')}</p>
              <div className="plugin-meta">
                <code className="plugin-cmd">thething plugin install {p.id}</code>
                <span className="plugin-ver">v{p.version}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="plugin-note">
          <span aria-hidden>💡</span>
          <p>
            想按需安装？命令行一行装好：
            <code>thething plugin install &lt;名称&gt;</code>
            ，或在插件管理页「市场」里点击安装。插件安装后立即启用，重启应用生效。
          </p>
        </div>
      </div>
    </section>
  )
}
