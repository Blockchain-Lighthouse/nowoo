import * as argon2 from 'argon2'

import supabase from '@/lib/utils/supabase'

export async function createBoard({
  title,
  content,
  name,
  password,
}: {
  title: string
  content: string
  name: string
  password: string
}) {
  'use server'
  await supabase.from('board').insert([
    {
      title,
      content,
      name,
      password: await argon2.hash(password),
    },
  ])
}
