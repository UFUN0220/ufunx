import { NextResponse } from 'next/server'
import { supabase } from '~/utils/supabase' // 根据你的路径调整

// 获取当前催更数
export async function GET() {
  const { data, error } = await supabase.from('counters').select('count').eq('id', 'urge').single()

  if (error) {
    return NextResponse.json({ count: 0 }, { status: 500 })
  }

  return NextResponse.json({ count: data.count })
}

// 执行催更 (调用数据库的自增函数)
export async function POST() {
  const { error } = await supabase.rpc('increment_urge')

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
