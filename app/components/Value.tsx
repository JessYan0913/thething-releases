const VALUE_ITEMS = [
  {
    ico: '👤',
    title: '少养一个人',
    desc: '把重复的、流程化的、需要 24 小时盯着的活交给它。按省下的人力付费，而不是按次数、按 token。',
  },
  {
    ico: '🔒',
    title: '数据留在你手里',
    desc: '它住在你的企业内网里，你的数据不进任何人的云。',
  },
  {
    ico: '🛡️',
    title: '每件事都在你眼皮底下',
    desc: '花钱、改数据、对外发消息，先过你的审批，全程留痕。',
  },
  {
    ico: '📈',
    title: '越用越值钱',
    desc: '它记住你们公司的流程、口径和历史，干得越久越懂你。',
  },
]

export default function Value() {
  return (
    <section className="section" id="value">
      <div className="container">
        <div className="section-head center">
          <div className="section-kicker">你得到的是结果，不是功能</div>
          <h2 className="section-title">少养一个人，多一个干活的</h2>
          <p className="section-sub">
            工具要人用，员工替你干活。TheThing 不是又一个要你学习、操作、维护的工具——它是来上班的。
          </p>
        </div>

        <div className="card-grid">
          {VALUE_ITEMS.map((item) => (
            <div className="value-card" key={item.title}>
              <div className="ico" aria-hidden>
                {item.ico}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
