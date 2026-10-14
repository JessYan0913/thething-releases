export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/logo.svg" alt="TheThing" className="brand-mark" />
          TheThing
        </div>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/JessYan0913/thething-releases" target="_blank" rel="noopener noreferrer">
              GitHub 仓库
            </a>
          </li>
          <li>
            <a href="https://github.com/JessYan0913/thething-releases/releases" target="_blank" rel="noopener noreferrer">
              下载与发布
            </a>
          </li>
          <li>
            <a href="https://github.com/JessYan0913/thething-releases/issues" target="_blank" rel="noopener noreferrer">
              联系我们
            </a>
          </li>
        </ul>
        <div className="footer-meta">
          © {new Date().getFullYear()} TheThing · MIT License · 数据不出内网
        </div>
      </div>
    </footer>
  )
}
