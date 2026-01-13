import React from 'react'
import MBTI from './mbti'
import '~/css/homefont.css'

const Bentotest: React.FC = () => {
  const Klayimg = '/static/images/mainPage/Klay_home2.png'
  const cutegif = '/static/images/mainPage/cute.gif'
  const jsu = '/static/images/mainPage/jsu.jpg'
  const washu = '/static/images/mainPage/washu_home.jpg'
  const stl = '/static/images/mainPage/stl_home.png'
  const test = '/static/images/mainPage/ujs_home.jpg'
  const qingdao = '/static/images/mainPage/qingdao_home2.jpg'
  const starsky = '/static/images/mainPage/washu_sky.jpg'
  const logo = '/static/images/const/logo.jpg'
  const cutejpg = '/static/images/mainPage/cute2.JPG'

  const chineseFont = '"heishenhua", cursive, sans-serif'

  return (
    <div className="grid grid-cols-[repeat(4,_5rem)] grid-rows-[repeat(20,_5rem)] justify-center gap-4 sm:gap-6 lg:grid-cols-[repeat(8,_6rem)] lg:grid-rows-[repeat(10,_6rem)] dark:border-gray-600">
      {/* 1 */}
      <div
        className="bento"
        style={
          {
            '--lg': '1 / 1 / 3 / 5',
            '--sm': '1 / 1 / 3 / 5',
          } as any
        }
      >
        <MBTI />
      </div>

      {/* 2 */}
      <div
        className="bento"
        style={
          {
            '--lg': '1 / 5 / 3 / 7',
            '--sm': '7 / 1 / 9 / 3',
          } as any
        }
      >
        <div className="relative flex h-full flex-col items-center justify-center gap-2 rounded-[1.25rem] border p-4 shadow dark:border-gray-600">
          <h2 className="bentofontdark text-nowrap text-center">
            审核员你好👋
            <br />
            <span className="text-[#FFD700]">无不良引导🔞</span>
          </h2>
        </div>
      </div>

      {/* 3 */}
      <div
        className="bento"
        style={
          {
            '--lg': '1 / 7 / 5 / 9',
            '--sm': '7 / 3 / 11 / 5',
          } as any
        }
      >
        <div className="relative flex h-full flex-col justify-center gap-2 rounded-[1.25rem] border p-4 shadow dark:border-gray-600">
          <img
            src={qingdao}
            alt="qd"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '1.25rem',
              zIndex: -1,
            }}
          />
          <p className="text-taglight absolute left-4 top-4">
            <i className="ri-graduation-cap-line"></i> 故乡
          </p>

          <h2 className="bentofontlight text-center" style={{ fontSize: '2.3em' }}>
            中
            <br />
            国
            <br />
            <span className="text-[#FF9999]">青</span>
            <br />
            <span className="text-[#FF9999]">岛</span>
          </h2>
        </div>
      </div>

      {/* 4 */}
      <div
        className="bento"
        style={
          {
            '--lg': '4 / 1 / 8 / 3',
            '--sm': '9 / 1 / 13 / 3',
          } as any
        }
      >
        <div className="relative flex h-full flex-col justify-center rounded-[1.25rem] border bg-cover bg-center shadow dark:border-gray-600">
          <img
            src={Klayimg}
            alt="Klay"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '1.25rem', // 保持与父容器相同的圆角
            }}
          />
        </div>
      </div>

      {/* 5 */}
      <div
        className="bento"
        style={
          {
            '--lg': '3 / 3 / 7 / 7',
            '--sm': '3 / 1 / 7 / 5',
          } as any
        }
      >
        <div className="relative flex h-full flex-col justify-center rounded-[1.25rem] border bg-cover bg-center shadow dark:border-gray-600">
          <img
            src={logo} // 请确保图片路径正确
            alt="Logo"
            className="mx-auto -mt-8 mb-4 h-16 w-16 rounded-full lg:h-24 lg:w-24"
          />
          <h2
            className="responsive-heading mt-4 text-nowrap text-center"
            style={{ fontFamily: chineseFont, color: 'ffffff' }}
          >
            由心以暇
            <br />
            放鹿青崖
          </h2>
        </div>
      </div>

      {/* 6 */}
      <div
        className="bento"
        style={
          {
            '--lg': '5 / 7 / 7 / 9',
            '--sm': '11 / 3 / 13 / 5',
          } as React.CSSProperties & { '--lg': string; '--sm': string }
        }
      >
        <div className="relative flex h-full flex-col items-center justify-center gap-2 rounded-[1.25rem] border p-4 shadow dark:border-gray-600">
          <p className="text-tag absolute left-4 top-4">
            <i className="ri-graduation-cap-line"></i> 性格
          </p>
          <h2 className="bentofontdark text-nowrap text-center">
            姣花照水🌸
            <br />
            弱柳扶风🍃
          </h2>
        </div>
      </div>

      {/* 7 */}
      <div
        className="bento"
        style={
          {
            '--lg': '3 / 1 / 4 / 3',
            '--sm': '17 / 1 / 18 / 3',
          } as any
        }
      >
        <div className="relative flex h-full flex-col items-center justify-center gap-2 rounded-[1.25rem] border p-4 shadow dark:border-gray-600">
          <h2 className="bentofontdark text-khaki-500 text-nowrap text-center">
            <span className="text-[#8B5A2B]">白羊座</span>
          </h2>
        </div>
      </div>

      <div
        className="bento"
        style={
          {
            '--lg': '8 / 1 / 9 / 3',
            '--sm': '18 / 1 / 19 / 3',
          } as any
        }
      >
        <div className="relative flex h-full flex-col items-center justify-center gap-2 rounded-[1.25rem] border p-4 shadow dark:border-gray-600">
          <h2
            className="responsive-heading text-nowrap text-center"
            style={{ fontFamily: chineseFont, color: 'ffffff' }}
          >
            UFUN:)
          </h2>
        </div>
      </div>

      {/* 8 */}
      <div
        className="bento"
        style={
          {
            '--lg': '7 / 3 / 9 / 7',
            '--sm': '13 / 1 / 15 / 5',
          } as any
        }
      >
        <div className="relative flex h-full flex-col items-center justify-center gap-2 rounded-[1.25rem] border p-4 shadow dark:border-gray-600">
          <img
            src={washu}
            alt="WashU"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '1.25rem',
              zIndex: -1,
            }}
          />
          <p className="text-taglight absolute left-4 top-4 text-gray-300">
            <i className="ri-graduation-cap-line"></i> 硕士在读
          </p>
          <h2 className="bentofontlight mt-4 text-gray-200" style={{ fontSize: '2.5em' }}>
            WashU
          </h2>
          <p className="bentofontdark" style={{ fontSize: '1.5em', color: '#A51417' }}>
            McKelvey School of Engineering
          </p>
        </div>
      </div>

      {/* 9 */}
      <div
        className="bento"
        style={
          {
            '--lg': '9 / 1 / 11 / 3',
            '--sm': '19 / 1 / 21 / 3',
          } as any
        }
      >
        <div
          className="relative flex h-full flex-col justify-center rounded-[1.25rem] border bg-cover bg-center shadow dark:border-gray-600"
          style={{ textAlign: 'center' }}
        >
          <img
            src={cutegif}
            alt="cute"
            style={{
              width: '62%',
              height: '62%',
              objectFit: 'cover',
              borderRadius: '1.25rem',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </div>
      </div>

      {/* 10 */}
      <div
        className="bento"
        style={
          {
            '--lg': '9 / 3 / 11 / 7',
            '--sm': '15 / 1 / 17 / 5',
          } as any
        }
      >
        <div className="relative flex h-full flex-col items-center justify-center gap-2 rounded-[1.25rem] border p-4 shadow dark:border-gray-600">
          <img
            src={jsu}
            alt="school"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '1.25rem',
              zIndex: -1,
            }}
          />
          <p className="text-taglight absolute left-4 top-4">
            <i className="ri-graduation-cap-line"></i> 本科就读
          </p>
          <h2 className="bentofontlight mt-4 text-gray-200" style={{ fontSize: '2.3em' }}>
            江苏大学
          </h2>
          <p
            className="bentofontdark mt-2 text-gray-200"
            style={{ fontSize: '1.3em', color: '#D5ECD4' }}
          >
            计算机科学与通信工程学院
          </p>
        </div>
      </div>
      {/* 11 */}
      {/* <div
        className="bento"
        style={{
          "--lg": "7 / 7 / 9 / 9",
          "--sm": "17 / 3 / 19 / 5",
        }}
      >
        <div className="border rounded-[1.25rem] p-4 h-full shadow flex flex-col gap-2 justify-center relative items-center dark:border-gray-600">
        <img src={starsky} alt="STL" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.25rem', zIndex: -1 }} />
          <p className="absolute text-tag top-4 left-4 text-gray-200">
            启程
          </p>  
          <h2 className="text-center text-nowrap bentofontdark text-gray-200">
          密苏里州
          <br />
          圣路易斯市
          </h2>
        </div>
      </div> */}

      {/* 11 new */}
      <div
        className="bento"
        style={
          {
            '--lg': '7 / 7 / 9 / 9',
            '--sm': '17 / 3 / 19 / 5',
          } as React.CSSProperties & { '--lg': string; '--sm': string }
        }
      >
        <div className="relative flex h-full flex-col items-center justify-center gap-2 rounded-[1.25rem] border p-4 shadow dark:border-gray-600">
          <p className="text-tag absolute left-4 top-4 text-gray-200">
            <i className="ri-graduation-cap-line"></i> 兴趣
          </p>
          <h2 className="bentofontdark text-nowrap text-center dark:text-gray-200">
            科技📱运动🏀
            <br />
            音乐🎵影视🖥️
          </h2>
        </div>
      </div>

      {/* 12 */}
      <div
        className="bento"
        style={
          {
            '--lg': '9 / 7 / 11 / 9',
            '--sm': '19 / 3 / 21 / 5',
          } as any
        }
      >
        <div
          className="relative flex h-full flex-col justify-center rounded-[1.25rem] border bg-cover bg-center shadow dark:border-gray-600"
          style={{ textAlign: 'center' }}
        >
          <img
            src={cutejpg}
            alt="cute2"
            style={{
              width: '62%',
              height: '62%',
              objectFit: 'cover',
              borderRadius: '1.25rem',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </div>
        {/* <div className="relative flex h-full flex-col items-center justify-center gap-2 rounded-[1.25rem] border p-4 shadow dark:border-gray-600">
          <h2 className="bentofontdark text-nowrap text-center">
            汹涌如江流
            <br />
            忐忑似轻舟
          </h2>
        </div> */}
      </div>

      {/* 13 */}
      {/* <div
        className="bento"
        style={{
          "--lg": "10 / 7 / 11 / 9",
          "--sm": "19 / 3 / 21 / 5",
        }}
      >
        <div className="border rounded-[1.25rem] p-4 h-full shadow flex flex-col gap-2 justify-center relative items-center dark:border-gray-600">
          <p className="absolute text-tag top-4 left-4 text-gray-200">
            <i className="ri-graduation-cap-line"></i> 最近
          </p>
          
          <h2 className="text-center text-nowrap font-sans">
            seeYou->next
          </h2>
        </div>   
      </div> */}
    </div>
  )
}

export default Bentotest

{
  /* <p className="text-center font-bold text-gray-200 bentofontdark">
            更多
          </p> */
}
{
  /* 那岩KJMX
          <br />
          极客湾Geekerwan
          <br />
          真实球迷会
          <br />
          雨说体育徐静雨
          <br />
          绝命墨菲
          <br />
          代码随想录
          <br />
          灵茶山艾府 */
}
