import Logo from '@/components/logo'
import { Menu } from '@/components/menu'
import SearchForm from '@/components/search-form'

export default async function Page() {
  return (
    <section className='flex flex-col items-center gap-4 p-24 max-lg:px-4 max-lg:py-16'>
      <Logo />
      <Menu />
      <SearchForm />
      <div className='mt-32 w-full'>
        <div className='border-b border-[#D8D8D8] pb-6'>
          <h1 className='text-2xl font-bold'>자유게시판</h1>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center border-b border-[#D8D8D8] px-4 py-3'>
            <span className='w-[200px]'>제목</span>
            <input className='flex-1 rounded-md border-none px-5 py-3' placeholder='제목을 입력해주세요.' />
          </div>
          <div className='flex items-center border-b border-[#D8D8D8] px-4 py-3'>
            <span className='w-[200px]'>내용</span>
            <input className='h-[250px] flex-1 rounded-md border-none px-5 py-3' placeholder='내용을 입력해주세요.' />
          </div>
          <div className='flex items-center border-b border-[#D8D8D8] px-4 py-3'>
            <span className='w-[200px]'>작성자</span>
            <input className='flex-1 rounded-md border-none px-5 py-3' placeholder='이름을 입력해주세요.' />
          </div>
          <div className='flex items-center border-b border-[#D8D8D8] px-4 py-3'>
            <span className='w-[200px]'>비밀번호</span>
            <input className='flex-1 rounded-md border-none px-5 py-3' placeholder='비밀번호을 입력해주세요.' />
          </div>
          <div className='flex items-center border-b border-[#D8D8D8] px-4 py-3'>
            <span className='w-[200px]'>공개 설정</span>
            <div className='flex items-center gap-10'>
              <span>공개</span>
              <span>비공개</span>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='mt-7 rounded-md bg-[#FB9E48] px-8 py-3 text-xl text-white'>등록하기</button>
        </div>
      </div>
    </section>
  )
}
