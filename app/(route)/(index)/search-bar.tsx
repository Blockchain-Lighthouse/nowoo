import { cn } from '@/app/_styles/utils'

interface Props {
  searchValue: string
  onChangeSearchValue: (value: string) => void
}

export default function SearchBar({ searchValue, onChangeSearchValue }: Readonly<Props>) {
  return (
    <div className='relative'>
      <input
        className={cn('w-[600px] max-w-3xl rounded-[30px] border-none px-8 py-4', searchValue && 'rounded-b-none')}
        type='text'
        value={searchValue}
        onChange={(e) => onChangeSearchValue(e.target.value)}
        placeholder='아이템 or 몬스터 이름'
      />
    </div>
  )
}
