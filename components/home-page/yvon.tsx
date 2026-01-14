'use client'

import React, { useState } from 'react'
import '~/css/homefont.css'

export function Yvon() {
  const ufun = '/static/favicons/favicon.jpg'
  const [clickCount, setClickCount] = useState(0)

  const handleCopyClick = () => {
    if (clickCount === 0) {
      // 第一次点击：更新状态，显示上方气泡
      setClickCount(1)
    } else {
      // 第二次点击：跳转
      window.open('https://github.com/UFUN0220/ufunx', '_blank')
    }
  }

  return (
    <div className="z-50 flex h-screen w-full flex-col items-center justify-center bg-cover bg-center">
      <div className="custom-translate flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center md:flex-col">
          <h1 className="typography-hero-eyebrow leading-loose">uFun Pre</h1>
          <h2 className="ufunhead gradient-text mt-2 leading-loose">优雅的烧</h2>
        </div>
      </div>
      <img src={ufun} alt="Logo" className="imgtrans mx-auto rounded-3xl" />

      {/* ⚠️ 修改点：添加一个 relative 的容器来包裹按钮和气泡 */}
      <div className="group relative mt-8">
        {/* 气泡提示组件：只有点击过一次 (clickCount === 1) 才显示 */}
        {clickCount === 1 && (
          <div className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2 animate-bounce whitespace-nowrap rounded-lg bg-pink-500 px-3 py-1.5 text-xs font-medium text-white shadow-lg shadow-pink-500/30 dark:bg-pink-600 dark:text-white">
            嗯嗯啊啊～
          </div>
        )}

        <button
          onClick={handleCopyClick}
          className="rounded-full bg-blue-600 px-4 py-3 text-sm text-gray-200 transition-all hover:bg-blue-500 hover:shadow-lg active:scale-95"
        >
          {/* 点击后改变文案，引导跳转 */}
          {clickCount === 0 ? '抄似我' : '去GitHub'}
        </button>
      </div>

      <p className="mt-4 hidden text-center text-gray-500 md:block">
        请我吃 葡式蛋挞6只+吮指原味鸡4块 (三角) 起或 V我50 起*
      </p>
      <p className="mt-4 text-center text-gray-500 md:hidden">
        请我吃 葡式蛋挞6只+吮指原味鸡4块 (三角) 起
        <br />或 V我50 起*
      </p>
    </div>
  )
}
