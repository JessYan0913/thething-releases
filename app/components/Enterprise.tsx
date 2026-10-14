const STEPS = [
  {
    title: '部署',
    desc: '私有化部署进你的企业内网，数据不出内网，不进任何人的云。',
  },
  {
    title: '接入',
    desc: '接上你公司日常的飞书 / 微信，在团队协作的地方直接派活、审批、汇报。',
  },
  {
    title: '收费',
    desc: '按省下的人力收费，低于养一个全职员工的成本。',
  },
  {
    title: '联系',
    desc: '商务合作与私有化部署咨询，可通过 GitHub 联系我们。',
  },
]

export default function Enterprise() {
  return (
    <section className="section" id="enterprise">
      <div className="container">
        <div className="section-head center">
          <div className="section-kicker">企业私有化部署</div>
          <h2 className="section-title">AI 员工住进你的企业，而不是任何人的云</h2>
          <p className="section-sub">
            重视数据安全的企业与机构——外贸、律所、金融——把 AI 员工放在自己眼皮底下。
          </p>
        </div>

        <div className="enterprise-grid">
          {STEPS.map((s, i) => (
            <div className="ent-card" key={s.title}>
              <div className="num">0{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="ent-cta">
          <h3>想把 AI 员工派进你的公司？</h3>
          <p>先聊聊你的场景，我们告诉你怎么开始。</p>
          <a
            className="btn btn-primary"
            href="https://github.com/JessYan0913/thething-releases/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            联系我们
          </a>
        </div>
      </div>
    </section>
  )
}
