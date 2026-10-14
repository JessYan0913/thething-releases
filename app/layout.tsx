import type { Metadata } from 'next'
import { ReleaseProvider } from './lib/release'
import './globals.css'

export const metadata: Metadata = {
  title: 'TheThing — 别人卖 AI 工具，我们派 AI 员工',
  description:
    '住进你的企业，数据不出内网，按省下的人力收费，越用越懂你。TheThing 给你公司派一个 AI 员工：给它目标，它自己拆解、自己干、干完汇报；危险动作先问过你。',
  keywords: ['TheThing', 'AI 员工', 'AI Agent', '私有化部署', '企业 AI', '数据安全'],
  openGraph: {
    type: 'website',
    title: 'TheThing — 别人卖 AI 工具，我们派 AI 员工',
    description:
      '住进你的企业，数据不出内网，按省下的人力收费，越用越懂你。TheThing 给你公司派一个 AI 员工：给它目标，它自己拆解、自己干、干完汇报。',
  },
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <ReleaseProvider>{children}</ReleaseProvider>
      </body>
    </html>
  )
}
