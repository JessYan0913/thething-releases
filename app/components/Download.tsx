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

const isMac = (key: string) => key.startsWith('darwin-')

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
                {isMac(p.key) && (
                  <div className="dl-mac-note">
                    <b>macOS 提示：</b>应用未签名（ad-hoc）。若浏览器下载后首次打开提示
                    「已损坏」，在终端执行一次
                    <code>xattr -cr '/Applications/TheThing.app'</code>
                    后再双击打开即可。命令行下载的 dmg 双击可直接打开。
                  </div>
                )}
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
          <b>安装说明：</b>macOS 安装指引见上方对应卡片；浏览器下载的 dmg 若提示「已损坏」，
          在终端执行 <code>xattr -cr '/Applications/TheThing.app'</code> 后即可打开。
          Windows 直接运行 exe 按向导安装。
        </div>
      </div>
    </section>
  )
}
