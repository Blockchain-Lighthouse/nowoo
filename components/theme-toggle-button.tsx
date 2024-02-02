'use client'

import { useEffect } from 'react'

import { useDarkMode, useIsMounted } from '@/lib/hooks'

export default function ThemeToggleButton() {
  const { isDarkMode, toggle } = useDarkMode({
    defaultValue: false,
  })
  const isMounted = useIsMounted()

  useEffect(() => {
    if (isMounted()) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  })

  if (!isMounted()) return null

  return (
    <div className='fixed right-2 top-2'>
      <button className='text-2xl' onClick={toggle} aria-label='테마 변경'>
        {!isDarkMode ? '🌞' : '🌙'}
      </button>
    </div>
  )
}
