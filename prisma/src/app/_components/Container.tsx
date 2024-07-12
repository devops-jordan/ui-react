import React from 'react'

const Container = ({ children, height, width }: { children?: React.ReactNode, height: number, width: number }) => {
  return (
    <div className='flex h-screen'>
      <div className={`w-[${width}%] h-[${height}%] mx-auto my-auto`}>
        {children}
      </div>
    </div>
  )
}

export default Container