'use client'

import { Suspense, useState } from 'react'

import SearchBar from './search-bar'
import SearchResult from './search-result'

export default function Search() {
  const [searchValue, setSearchValue] = useState('')

  const onChangeSearchValue = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div className='relative'>
      <SearchBar searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} />
      <Suspense>
        <SearchResult searchValue={searchValue} />
      </Suspense>
    </div>
  )
}
