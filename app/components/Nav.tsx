'use client'

import { useRelease } from '../lib/release'

export default function Nav() {
  const { version } = useRelease()

  const links = [
    { href: '#value', label: '为什么是它' },
    { href: '#how', label: '怎么干活' },
    { href: '#download', label: '下载' },
    { href: '#enterprise', label: '企业部署' },
    { href: '#developer', label: '开发者' },
  ]

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">T</span>
          TheThing
        </a>
        <nav aria-label="主导航">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <a href="#download" className="btn btn-primary btn-sm">
            下载试用
            <span aria-hidden>v{version}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
