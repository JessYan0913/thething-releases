'use client'

import { useRelease, type PlatformKey } from '../lib/release'

const PLATFORMS: {
  key: PlatformKey
  os: string
  ico: string
  desc: string
}[] = [
  {
    key: 'darwin-arm64',
    os: 'macOS · Apple Silicon',
    ico: '🍎',
    desc: 'M1 / M2 / M3 / M4 芯片',
  },
  {
    key: 'darwin-x64',
    os: 'macOS · Intel',
    ico: '🍎',
    desc: 'Intel 芯片 Mac',
  },
  {
    key: 'win32-x64',
    os: 'Windows · x64',
    ico: '🪟',
    desc: 'Windows 10 / 11 64 位',
  },
]

export default function Download() {
  const { version, releaseUrl, platforms } = useRelease()

  return (
    <section className="section section-alt" id="download">
      <div className="container">
        <div className="section-head center">
          <div className="section-kicker">下载试用</div>
          <h2 className="section-title">下载最新版 v{version}</h2>
          <p className="section-sub">
            桌面应用内置全部能力。下载后直接安装，给 AI 员工派第一个活。
          </p>
        </div>

        <div className="dl-grid">
          {PLATFORMS.map((p) => {
            const info = platforms[p.key]
            return (
              <div className="dl-card" key={p.key}>
                <div className="dl-os">
                  <span className="os-ico" aria-hidden>{p.ico}</span>
                  {p.os}
                </div>
                <div className="dl-desc">{p.desc}</div>
                <div className="dl-file" title={info.filename}>
                  {info.filename}
                </div>
                <a
                  className="btn btn-primary"
                  href={info.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  下载安装包
                </a>
              </div>
            )
          })}
        </div>

        <div className="dl-foot">
          <span>
            历史版本：<a href="https://github.com/JessYan0913/thething-releases/releases" target="_blank" rel="noopener noreferrer">Releases 页面</a>
          </span>
          <span>
            版本清单（应用内更新检查用）：<a href="https://github.com/JessYan0913/thething-releases/releases/latest/download/latest.json" target="_blank" rel="noopener noreferrer">latest.json</a>
          </span>
          <span>
            发布说明：<a href={releaseUrl} target="_blank" rel="noopener noreferrer">v{version}</a>
          </span>
        </div>

        <div className="dl-note">
          <b>macOS 安装提示：</b>应用未签名（ad-hoc）。用
          <code>curl</code> 命令行下载的 dmg 双击即可直接打开；浏览器下载首次打开会提示「已损坏」，
          在终端执行一次 <code>xattr -cr '/Applications/The Thing.app'</code> 后再双击打开即可。
          Windows 直接运行 exe 按向导安装。
        </div>
      </div>
    </section>
  )
}
