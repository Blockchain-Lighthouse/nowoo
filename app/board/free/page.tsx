import Link from 'next/link'

import Logo from '@/components/logo'
import { Menu } from '@/components/menu'
import SearchForm from '@/components/search-form'

export default async function Page() {
  return (
    <section className='mx-auto flex max-w-screen-xl flex-col items-center gap-4 p-24 max-lg:px-4 max-lg:py-16'>
      <Logo />
      <Menu />
      <SearchForm />
      <div className='mt-32 w-full'>
        <div className='mb-8 flex justify-between'>
          <h1 className='text-2xl font-bold'>자유게시판</h1>
          <Link className='rounded-md bg-[#FB9E48] px-8 py-3 text-xl text-white' href='/board/free/create'>
            등록하기
          </Link>
        </div>
        <div className='flex flex-col border-t border-[#D8D8D8]'>
          {new Array(10).fill(0).map((_, index) => (
            <div className='flex justify-between border-b border-[#D8D8D8] px-10 py-6' key={index}>
              <div>
                <span className='text-[#999999]'>글 제목입니다</span>
              </div>
              <div className='flex items-center gap-24'>
                <span className='text-[#999999]'>사용자</span>
                <span className='text-[#999999]'>2021.10.15 10:00:00</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
