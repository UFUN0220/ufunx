'use client'
import React from 'react'

// --- 基础接口定义 ---
interface IconProps {
  className?: string
  onClick?: () => void
}

// 继承基础接口，增加外部 SVG 资源所需的 src 和 alt
interface SvgIconProps extends IconProps {
  src: string
  alt: string
  hoverColor?: string
}

// --- 内联 SVG 图标组件 (支持 Tailwind hover 变色) ---

// 1. 邮件图标
export const MailIcon: React.FC<IconProps> = ({ className = '', onClick }) => {
  return (
    <svg
      className={`h-8 w-8 cursor-pointer text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

// 2. GitHub 图标
export const GithubIcon: React.FC<IconProps> = ({ className = '', onClick }) => {
  return (
    <svg
      className={`h-8 w-8 cursor-pointer text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 012.578-.337c.84.03 1.724.117 2.578.337 1.91-.896 2.75-1.026 2.75-1.026.545 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.841-2.339 4.695-4.566 4.943.359.31.678.921.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.574.688.481A10.019 10.000 0 0022 12.017C22 6.484 17.523 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

// 3. LinkedIn 图标
export const LinkedinBoxIcon: React.FC<IconProps> = ({ className = '', onClick }) => {
  return (
    <svg
      className={`h-8 w-8 cursor-pointer text-gray-700 transition-colors hover:text-[#0A66C2] dark:text-gray-300 dark:hover:text-[#0A66C2] ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

// --- 外部 SVG 图标组件 (使用 object 标签) ---

// 4. Steam 图标
export const SteamIcon: React.FC<SvgIconProps> = ({
  src,
  alt,
  className = '',
  hoverColor = 'text-gray-800', // 注意：object 引入的 SVG 很难通过 text-color 变色，除非 SVG 内部支持
  onClick,
}) => {
  return (
    <div className={`relative ${className}`} onClick={onClick}>
      <object
        className={`h-6 w-6 cursor-pointer text-gray-700 transition-colors hover:${hoverColor} dark:text-gray-300 dark:hover:text-gray-100`}
        type="image/svg+xml"
        data={src}
        style={{ pointerEvents: 'none' }} // 关键：让鼠标事件穿透 object，触发 div 的 onClick
      >
        <img className="h-6 w-6" src={src} alt={alt} />
      </object>
    </div>
  )
}

// 5. 炉石传说图标
export const HearthstoneIcon: React.FC<SvgIconProps> = ({
  src,
  alt = 'Hearthstone',
  className = '',
  hoverColor = 'text-yellow-600',
  onClick,
}) => {
  return (
    <div className={`rounded-md p-[3px] dark:bg-gray-400 ${className}`} onClick={onClick}>
      <object
        className={`h-7 w-7 cursor-pointer text-gray-700 transition-colors hover:${hoverColor} dark:text-gray-300 dark:hover:${hoverColor}`}
        type="image/svg+xml"
        data={src}
        style={{ pointerEvents: 'none' }} // 关键：让鼠标事件穿透
      >
        <img className="h-7 w-7" src={src} alt={alt} />
      </object>
    </div>
  )
}

// --- 图标组合容器组件 ---
interface IconGroupProps {
  className?: string
  onIconClick?: (iconName: string) => void
}

export const IconGroup: React.FC<IconGroupProps> = ({ className = '', onIconClick }) => {
  // 定义静态资源路径
  const PATHS = {
    hearthstone: '/static/images/hearthstone.svg',
    steam: '/static/images/steam.svg',
  }

  // Tooltip 的通用样式 (避免重复代码)
  const tooltipClass = `
    pointer-events-auto select-all absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap 
    rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 z-50
    before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-2 before:bg-transparent
    dark:bg-gray-600
  `

  return (
    <div className={`flex justify-center gap-6 ${className}`}>
      {/* 1. Mail */}
      <div className="group relative flex items-center justify-center">
        <a href="mailto:ufun2026@gmail.com" aria-label="Email">
          <MailIcon onClick={() => onIconClick?.('mail')} />
        </a>
        <span className={tooltipClass}>ufun2026@gmail.com</span>
      </div>

      {/* 2. GitHub */}
      <div className="group relative flex items-center justify-center">
        <a
          href="https://github.com/UFUN0220"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon onClick={() => onIconClick?.('github')} />
        </a>
        <span className={tooltipClass}>GitHub</span>
      </div>

      {/* 3. LinkedIn */}
      <div className="group relative flex items-center justify-center">
        <a
          href="https://www.linkedin.com/in/fangyou11/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinBoxIcon onClick={() => onIconClick?.('linkedin')} />
        </a>
        <span className={tooltipClass}>LinkedIn</span>
      </div>

      {/* 4. Hearthstone */}
      <div className="group relative flex items-center justify-center">
        {/* 这里使用 div 包裹并处理点击，或者直接传给组件 */}
        <div onClick={() => onIconClick?.('hearthstone')}>
          <HearthstoneIcon src={PATHS.hearthstone} alt="Hearthstone图标" />
        </div>
        <span className={tooltipClass}>战网ID：文艺青年#51444</span>
      </div>

      {/* 5. Steam */}
      <div className="group relative flex items-center justify-center">
        <div onClick={() => onIconClick?.('steam')}>
          <SteamIcon src={PATHS.steam} alt="Steam图标" />
        </div>
        <span className={tooltipClass}>好友代码：1168891614</span>
      </div>
    </div>
  )
}

export default IconGroup
