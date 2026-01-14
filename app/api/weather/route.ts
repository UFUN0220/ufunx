import { NextResponse } from 'next/server'

export async function GET() {
  // 1. 检查 API Key 是否读取成功
  const API_KEY = process.env.OPENWEATHER_API_KEY

  if (!API_KEY) {
    console.error('错误: 找不到 API Key')
    return NextResponse.json({ error: 'API Key missing' }, { status: 500 })
  }

  const LAT = '38.6270'
  const LON = '-90.1994'

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`

    // 2. 发起请求
    const res = await fetch(url, { cache: 'no-store' }) // 暂时禁用缓存方便调试
    const data = await res.json()

    // 3. 打印 OpenWeatherMap 返回的原始结果
    console.log('OpenWeatherMap 返回状态:', res.status)
    if (res.status !== 200) {
      console.error('OpenWeatherMap 报错详细信息:', data)
    }

    return NextResponse.json(data, { status: res.status })
  } catch (error) {
    console.error('服务器内部请求出错:', error)
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 })
  }
}
