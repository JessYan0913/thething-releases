const HOW_ITEMS = [
  {
    seen: '在企业日常的飞书 / 微信里直接派活给它',
    behind: '飞书 / 企微 / 微信连接器（HTTP / WS 入站，支持多机器人实例）',
  },
  {
    seen: '它自己拆目标、一步步干完',
    behind: '多步 Agent、子 Agent 并行、目标驱动（Goal）',
  },
  {
    seen: '危险动作先弹给你审批',
    behind: '工具审批挂起 + smart / auto-review / full-trust 三种模式',
  },
  {
    seen: '干过的活变成公司的知识',
    behind: 'Wiki 知识库 + 用户记忆，跨会话沉淀',
  },
  {
    seen: '能接你们已有的系统',
    behind: 'MCP 扩展 + 连接器插件（可自定义）',
  },
  {
    seen: '长任务不中断、不失控',
    behind: '上下文压缩、对话路线图、定时任务',
  },
  {
    seen: '桌面 / 网页 / 命令行 / API',
    behind: '多形态客户端，怎么方便怎么用',
  },
]

export default function HowItWorks() {
  return (
    <section className="section section-alt" id="how">
      <div className="container">
        <div className="section-head center">
          <div className="section-kicker">它在你公司里怎么干活</div>
          <h2 className="section-title">你看到的，和背后的能力</h2>
          <p className="section-sub">
            不需要学习复杂界面——它就在你们已经在用的地方干活。
          </p>
        </div>

        <div className="how-list">
          {HOW_ITEMS.map((item) => (
            <div className="how-item" key={item.seen}>
              <div className="how-seen">
                <div className="how-label">你看到的</div>
                <div className="txt">{item.seen}</div>
              </div>
              <div className="how-behind">
                <div className="how-label">背后的能力</div>
                <div className="txt">{item.behind}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
