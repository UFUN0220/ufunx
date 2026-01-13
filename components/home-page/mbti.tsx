import React from 'react'
import '~/css/homefont.css'

const MBTI = () => {
  return (
    <div className="relative flex h-full flex-col justify-center gap-2 rounded-[1.25rem] border p-4 shadow dark:border-gray-600">
      <div className="text-serif text-right font-bold">
        <img
          alt="IMSB"
          loading="lazy"
          width={180}
          height={180}
          decoding="async"
          data-nimg="1"
          className="absolute bottom-[-0.15rem] left-8"
          style={{ color: 'transparent' }}
          src="/static/images/mainPage/imsbpro.png"
        />
        <p className="text-tag absolute right-4 top-4">MBTI 人格类型</p>
        <h2 className="text-clamp mt-8 text-[#8E4A8E]">
          IMSB
          <br />
          老缠
        </h2>
      </div>
    </div>
  )
}

export default MBTI
