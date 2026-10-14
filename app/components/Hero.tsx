'use client'

import { useRelease } from '../lib/release'

export default function Hero() {
  const { version } = useRelease()

  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <div className="hero-badge">
            <span className="dot" aria-hidden />
            给你公司派一个 AI 员工
          </div>
          <h1 className="hero-title">
            别人卖 AI 工具，
            <br />
            我们派 <span className="grad">AI 员工</span>
          </h1>
          <p className="hero-sub">
            住进你的企业，数据不出内网，按省下的人力收费，越用越懂你。
            给它目标，它自己拆解、自己干、干完汇报；危险动作先问过你。
          </p>
          <div className="hero-actions">
            <a href="#download" className="btn btn-primary">
              免费下载试用
            </a>
            <a href="#enterprise" className="btn btn-ghost">
              企业私有化部署
            </a>
          </div>
          <div className="hero-meta">
            <span className="chip">
              最新版 <b>v{version}</b>
            </span>
            <span className="chip">
              <b>macOS</b> / <b>Windows</b>
            </span>
            <span className="chip">数据不出内网</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <div className="workbench">
            <div className="wb-bar">
              <span className="wb-dots">
                <i /><i /><i />
              </span>
              <span className="wb-title">TheThing · AI 员工工作台</span>
              <span className="wb-status">
                <span className="dot" /> 运行中
              </span>
            </div>

            <div className="wb-body">
              <div className="wb-goal">
                <span className="ico">🎯</span>
                <div>
                  <div className="lbl">目标（你派的活）</div>
                  <div className="txt">把 80 份合同归档，并向客户发出确认邮件</div>
                </div>
              </div>

              <ul className="wb-steps">
                <li className="wb-step done">
                  <span className="st">✓</span>
                  扫描合同文件夹，识别待归档文件
                  <span className="sp">08:12</span>
                </li>
                <li className="wb-step done">
                  <span className="st">✓</span>
                  按客户 / 年份分类，统一命名规范
                  <span className="sp">08:14</span>
                </li>
                <li className="wb-step doing">
                  <span className="st">▶</span>
                  生成归档清单，等待你的确认
                  <span className="sp">进行中</span>
                </li>
              </ul>

              <div className="wb-approval">
                <div className="hd">
                  <span className="shield">🛡️</span> 需要你审批
                </div>
                <div className="msg">
                  AI 员工想执行 <code>发送邮件</code> —— 涉及对外发送，需你批准
                </div>
                <div className="acts">
                  <span className="detail">查看详情</span>
                  <span className="ok">同意</span>
                  <span className="no">拒绝</span>
                </div>
              </div>

              <div className="wb-report">
                <b>已归档 12 / 80</b>
                <span className="bar"><i /></span>
                <span>上次汇报 10 分钟前</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
