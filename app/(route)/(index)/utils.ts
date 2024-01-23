import { Tables } from '@/app/_types/supabase'

export const getItems = async () => {
  const items = (await fetch('http://localhost:3000/api/items').then((res) => res.json())) as Tables<'items'>[] | null
  return items
}

export const getItemImage = (id: number) => {
  return `http://maplestory.io/api/gms/62/item/${id}/icon?resize=3`
}
