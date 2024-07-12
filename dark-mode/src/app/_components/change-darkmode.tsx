"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const SwichDarkLighMode = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return (
    <div className=''>Detecting system</div>
  )

  return (
    <div className='flex flex-col gap-2'>
      <p>System say: {theme}</p>
      <button className='px-2 rounded-sm bg-slate-300 dark:text-black transition-all duration-150 hover:scale-105' onClick={() => setTheme("light")}>Ligh Mode</button>
      <button className='px-2 rounded-sm bg-slate-300 dark:text-black transition-all duration-150 hover:scale-105' onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  )
}

export default SwichDarkLighMode