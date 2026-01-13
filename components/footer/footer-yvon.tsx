export function FooterYvon() {
  const beian = '/static/images/const/beian.png'

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:-ml-[4%] lg:w-[108%]">
      {/* 版权信息 - 始终左对齐 */}
      <div className="whitespace-nowrap font-serif font-bold text-lg">
        © 2026 Fang You
      </div>

      {/* 备案信息容器 - 右对齐 */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-serif font-bold md:justify-end text-lg">
        Only if you were with me.
        {/* 备案号链接 */}
        {/* <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ICP备案信息"
          className="link inline-flex items-center transition-colors hover:text-primary-500"
        >
          <span className="inline-flex align-baseline font-serif">鲁 ICP 备 2024121866 号 - 1</span>
        </a> */}

        {/* 公安备案链接 */}
        {/* <a
          href="https://beian.mps.gov.cn/#/query/webSearch?code=37020202370415"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="公安备案信息"
          className="link inline-flex items-center font-serif transition-colors hover:text-primary-500"
        >
          <img
            src={beian}
            alt="公安备案图标"
            width="18"
            height="18"
            loading="lazy"
            decoding="async"
            className="mr-1 inline-block align-baseline"
          />
          鲁公网安备 37020202370415
        </a> */}
      </div>
    </div>
  )
}
