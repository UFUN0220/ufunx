import React, { useState } from 'react'
import '~/css/homefont.css'

export function Yvon() {
  const ufun = '/static/favicons/favicon.jpg'

  return (
    <div className="z-50 flex h-screen w-full flex-col items-center justify-center bg-cover bg-center">
      <div className="custom-translate flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center md:flex-col">
          <h1 className="typography-hero-eyebrow leading-loose">uFun Pre</h1>
          <h2 className="ufunhead gradient-text mt-2 leading-loose">优雅的烧</h2>
        </div>
      </div>
      <img src={ufun} alt="Logo" className="imgtrans mx-auto rounded-3xl" />
      <button className="mt-8 rounded-full bg-blue-600 px-4 py-3 text-sm text-gray-200 hover:bg-blue-500">
        抄似我
      </button>
      <p className="mt-4 hidden text-center text-gray-500 md:block">
        请我吃 葡式蛋挞6只+吮指原味鸡4块 (三角) 起或 V我50 起*
      </p>
      {/* 在 md 以下屏幕显示 */}
      <p className="mt-4 text-center text-gray-500 md:hidden">
        请我吃 葡式蛋挞6只+吮指原味鸡4块 (三角) 起
        <br />或 V我50 起*
      </p>
    </div>
  )
}
