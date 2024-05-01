import React from 'react'

const SwichDarkLighMode = () => {
  return (
    <div className='flex flex-col gap-2'>
      <button className='px-2 rounded-sm bg-slate-300 dark:text-black transition-all duration-150 hover:scale-105'>Ligh Mode</button>
      <button className='px-2 rounded-sm bg-slate-300 dark:text-black transition-all duration-150 hover:scale-105'>Dark Mode</button>
    </div>
  )
}

export default SwichDarkLighMode