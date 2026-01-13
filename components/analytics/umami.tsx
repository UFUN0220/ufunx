import Script from 'next/script' // 注意：通常不需要 .js 后缀

interface UmamiAnalyticsProps {
  websiteId?: string
  src?: string
}

export function UmamiAnalytics({ websiteId, src }: UmamiAnalyticsProps) {
  // 优先使用传入的 props，如果没有，则读取环境变量
  const id = websiteId || process.env.NEXT_PUBLIC_UMAMI_ID
  // 默认为 Umami Cloud 的官方地址，也可以通过环境变量覆盖
  const scriptUrl = src || process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || 'https://cloud.umami.is/script.js'

  if (!id) {
    return null
  }

  return (
    <Script
      src={scriptUrl}
      data-website-id={id}
      strategy="afterInteractive" // Next.js 推荐的统计脚本加载策略
    />
  )
}