'use client'

import { useEffect, useState } from 'react'

// 如果你想彻底解耦，可以删掉下面这行，并将 Props 里的 type 类型改为 string 或 any
// import type { StatsType } from '~/db/schema' 

export function ViewsCounter({
  type, // 暂时保留此参数以兼容父组件调用，但在 Redis 简单实现中我们暂时只用了 slug
  slug,
  className,
  trackView = true, // 默认开启计数。如果在博客列表页只展示不计数，可传 false
}: {
  type?: any // 放宽类型限制，不再依赖 schema
  slug: string
  className?: string
  trackView?: boolean
}) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    const fetchViews = async () => {
      try {
        // 核心逻辑：
        // trackView = true -> POST 请求 -> Redis incr (+1) 并返回新值
        // trackView = false -> GET 请求 -> Redis get (不增加) 只返回当前值
        const method = trackView ? 'POST' : 'GET'
        
        const res = await fetch(`/api/views/${slug}`, { 
          method,
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (res.ok) {
          const data = await res.json()
          setViews(data.views)
        }
      } catch (error) {
        console.error('Error updating/fetching views:', error)
      }
    }

    fetchViews()
  }, [slug, trackView])

  return (
    <span className={className}>
      {views === null ? '' : `${views.toLocaleString()} views`}
    </span>
  )
}