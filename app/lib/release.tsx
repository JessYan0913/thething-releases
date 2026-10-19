'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type PlatformKey = 'darwin-arm64' | 'darwin-x64' | 'win32-x64'

export interface PlatformInfo {
  url: string
  filename: string
}

export interface ReleaseInfo {
  version: string
  releaseUrl: string
  platforms: Record<PlatformKey, PlatformInfo>
}

/**
 * 兜底版本（latest.json 内容）。客户端运行时会尝试从 GitHub API 拉取最新版覆盖，
 * 拉取失败（离线 / 限流 / 被墙）时页面仍可用这套默认值，保证首屏与离线体验。
 */
export const DEFAULT_RELEASE: ReleaseInfo = {
  version: '0.13.2',
  releaseUrl: 'https://github.com/JessYan0913/thething-releases/releases/tag/v0.13.2',
  platforms: {
    'darwin-arm64': {
      url: 'https://github.com/JessYan0913/thething-releases/releases/download/v0.13.2/TheThing-0.13.2-arm64.dmg',
      filename: 'TheThing-0.13.2-arm64.dmg',
    },
    'darwin-x64': {
      url: 'https://github.com/JessYan0913/thething-releases/releases/download/v0.13.2/TheThing-0.13.2.dmg',
      filename: 'TheThing-0.13.2.dmg',
    },
    'win32-x64': {
      url: 'https://github.com/JessYan0913/thething-releases/releases/download/v0.13.2/TheThing-0.13.2-win-x64.exe',
      filename: 'TheThing-0.13.2-win-x64.exe',
    },
  },
}

const RELEASE_API = 'https://api.github.com/repos/JessYan0913/thething-releases/releases/latest'

const ReleaseContext = createContext<ReleaseInfo>(DEFAULT_RELEASE)

export function useRelease(): ReleaseInfo {
  return useContext(ReleaseContext)
}

export function ReleaseProvider({ children }: { children: ReactNode }) {
  const [release, setRelease] = useState<ReleaseInfo>(DEFAULT_RELEASE)

  useEffect(() => {
    let cancelled = false

    fetch(RELEASE_API, { headers: { Accept: 'application/vnd.github+json' } })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: unknown) => {
        if (cancelled) return
        const d = data as {
          tag_name?: string
          html_url?: string
          assets?: { name?: string; browser_download_url?: string }[]
        }
        const tag = d?.tag_name
        const assets = Array.isArray(d?.assets) ? d.assets : []
        if (!tag) return

        const pick = (pred: (name: string) => boolean) =>
          assets.find((a) => typeof a.name === 'string' && pred(a.name))

        const a64 = pick((n) => n.endsWith('-arm64.dmg'))
        const ax64 = pick((n) => n.endsWith('.dmg') && !n.endsWith('-arm64.dmg'))
        const win = pick((n) => n.endsWith('.exe'))

        const version = String(tag).replace(/^v/i, '')
        const base = (a: { browser_download_url?: string } | undefined, filename: string) =>
          a?.browser_download_url ? { url: a.browser_download_url, filename } : null

        const next: ReleaseInfo = {
          version,
          releaseUrl: d?.html_url || DEFAULT_RELEASE.releaseUrl,
          platforms: {
            'darwin-arm64': base(a64, 'TheThing-' + version + '-arm64.dmg') ?? DEFAULT_RELEASE.platforms['darwin-arm64'],
            'darwin-x64': base(ax64, 'TheThing-' + version + '.dmg') ?? DEFAULT_RELEASE.platforms['darwin-x64'],
            'win32-x64': base(win, 'TheThing-' + version + '-win-x64.exe') ?? DEFAULT_RELEASE.platforms['win32-x64'],
          },
        }
        setRelease(next)
      })
      .catch(() => {
        /* 保持兜底版本 */
      })

    return () => {
      cancelled = true
    }
  }, [])

  return <ReleaseContext.Provider value={release}>{children}</ReleaseContext.Provider>
}
