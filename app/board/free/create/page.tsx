'use client'

import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import { minLength, object, string } from 'valibot'

import Logo from '@/components/logo'
import { Menu } from '@/components/menu'
import SearchForm from '@/components/search-form'

const boardSchema = object({
  title: string('제목을 입력해주세요.', [minLength(1, '제목을 입력해주세요.')]),
  content: string('내용을 입력해주세요.', [minLength(1, '내용을 입력해주세요.')]),
  name: string('이름을 입력해주세요.', [minLength(1, '이름을 입력해주세요.')]),
  password: string('비밀번호을 입력해주세요.', [minLength(1, '비밀번호을 입력해주세요.')]),
})

// type BoardSchema = Output<typeof boardSchema>

export default function Page() {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: valibotResolver(boardSchema),
  })

  return (
    <section className='mx-auto flex max-w-screen-xl flex-col items-center gap-4 p-24 max-lg:px-4 max-lg:py-16'>
      <Logo />
      <Menu />
      <SearchForm />
      <form className='mt-32 w-full'>
        <div className='border-b border-[#D8D8D8] pb-6'>
          <h1 className='text-2xl font-bold'>자유게시판</h1>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center border-b border-[#D8D8D8] px-4 py-3'>
            <span className='w-[200px]'>제목</span>
            <div className='flex-1'>
              <input
                className='w-full rounded-md border-none px-5 py-3'
                placeholder='제목을 입력해주세요.'
                {...register('title')}
              />
              {errors.title && <span className='text-sm text-red-600'>{errors.title.message?.toString()}</span>}
            </div>
          </div>
          <div className='flex items-center border-b border-[#D8D8D8] px-4 py-3'>
            <span className='w-[200px]'>내용</span>
            <div className='flex-1'>
              <textarea
                className='h-[250px] w-full rounded-md border-none px-5 py-3'
                placeholder='내용을 입력해주세요.'
                {...register('content')}
              />
              {errors.content && <span className='text-sm text-red-600'>{errors.content.message?.toString()}</span>}
            </div>
          </div>
          <div className='flex items-center border-b border-[#D8D8D8] px-4 py-3'>
            <span className='w-[200px]'>작성자</span>
            <div className='flex-1'>
              <input
                className='w-full rounded-md border-none px-5 py-3'
                placeholder='이름을 입력해주세요.'
                {...register('name')}
              />
              {errors.name && <span className='text-sm text-red-600'>{errors.name.message?.toString()}</span>}
            </div>
          </div>
          <div className='flex items-center border-b border-[#D8D8D8] px-4 py-3'>
            <span className='w-[200px]'>비밀번호</span>
            <div className='flex-1'>
              <input
                className='w-full rounded-md border-none px-5 py-3'
                placeholder='비밀번호을 입력해주세요.'
                {...register('password')}
              />
              {errors.password && <span className='text-sm text-red-600'>{errors.password.message?.toString()}</span>}
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='mt-7 rounded-md bg-[#FB9E48] px-8 py-3 text-xl text-white' type='submit'>
            등록하기
          </button>
        </div>
      </form>
    </section>
  )
}
