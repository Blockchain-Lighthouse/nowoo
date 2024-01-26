'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

import { cn } from '@/lib/utils'

interface Props {
  isMatchedResultExist: boolean
}

export default function SearchBar({ isMatchedResultExist }: Readonly<Props>) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  return (
    <div
      className={cn(
        'flex w-full items-center gap-4 rounded-[30px] bg-white px-8 py-4',
        isMatchedResultExist && 'rounded-b-none shadow-md'
      )}
    >
      <input
        className='flex-1 border-none p-0 focus:border-transparent focus:ring-0'
        type='text'
        onChange={(e) => {
          const params = new URLSearchParams(searchParams)
          const term = e.target.value

          if (term) {
            params.set('query', term)
          } else {
            params.delete('query')
          }
          replace(`?${params.toString()}`)
        }}
        placeholder='아이템 or 몬스터 이름'
        defaultValue={searchParams.get('query') ?? ''}
      />
      <Search />
    </div>
  )
}
