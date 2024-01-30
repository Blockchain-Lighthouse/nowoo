import Link from 'next/link'
import { Suspense } from 'react'

import Logo from '@/components/logo'
import { Menu } from '@/components/menu'
import SearchForm from '@/components/search-form'

import Boards from './boards'

export default function Page() {
  return (
    <section className='mx-auto flex max-w-screen-xl flex-col items-center gap-4 p-24 max-lg:px-4 max-lg:py-16'>
      <Logo />
      <Menu />
      <SearchForm />
      <div className='mt-32 w-full max-md:mt-40'>
        <div className='mb-8 flex justify-between max-md:mb-6'>
          <h1 className='text-2xl font-bold max-md:text-xl'>자유게시판</h1>
          <Link
            className='rounded-md bg-[#FB9E48] px-8 py-3 text-xl text-white max-md:px-4 max-md:py-2 max-md:text-base'
            href='/board/free/create'
          >
            등록하기
          </Link>
        </div>
        <Suspense>
          <Boards />
        </Suspense>
      </div>
    </section>
  )
}
