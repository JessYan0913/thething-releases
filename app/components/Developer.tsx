const FEATURES = [
  '多步 Agent、子 Agent 并行、目标驱动',
  'Wiki 知识库 + 用户记忆，跨会话沉淀',
  'MCP 扩展 + 连接器插件，可接已有系统',
  '上下文压缩、对话路线图、定时任务',
  '多形态客户端：桌面 / 网页 / 命令行 / API',
]

export default function Developer() {
  return (
    <section className="section section-alt" id="developer">
      <div className="container">
        <div className="section-head center">
          <div className="section-kicker">个人 / 开发者使用</div>
          <h2 className="section-title">想先体验引擎本身？</h2>
          <p className="section-sub">
            桌面应用开箱即用；命令行工具适合自动化与深度使用。
          </p>
        </div>

        <div className="dev-box">
          <div className="dev-panel">
            <h3>命令行安装</h3>
            <p>需要 Node.js ≥ 20。一行命令装好，直接对话。</p>
            <div className="term">
              <span className="prompt">$</span> npm i -g @the-thing/cli
              <br />
              <span className="prompt">$</span> thething --help
            </div>
            <div className="dev-note">
              源码仓库保持私有，不对外公开；本仓库即官方发布与落地页。
            </div>
          </div>

          <div className="dev-panel">
            <h3>内置能力</h3>
            <ul className="dev-list">
              {FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
