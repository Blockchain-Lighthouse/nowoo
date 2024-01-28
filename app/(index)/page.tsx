import { Suspense } from 'react'

import Logo from '@/components/logo'
import { Menu } from '@/components/menu'
import SearchForm from '@/components/search-form'

import PopularItems from './popular-items'
import PopularMonsters from './popular-monsters'

export default async function HomePage() {
  return (
    <section className='flex flex-col items-center gap-4 p-24 max-lg:px-4 max-lg:py-16'>
      <Logo />
      <Menu />
      <SearchForm />
      <div className='mt-32 flex w-full gap-10 max-lg:flex-col'>
        <Suspense>
          <PopularItems />
          <PopularMonsters />
        </Suspense>
      </div>
    </section>
  )
}
