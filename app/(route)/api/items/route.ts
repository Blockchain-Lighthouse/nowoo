import supabase from '@/app/_lib/utils/supabase'

export async function GET() {
  const { data: items } = await supabase.from('items').select()
  return Response.json(items)
}
