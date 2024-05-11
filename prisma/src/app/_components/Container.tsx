import React from 'react'

const Container = ({ children, height, width }: { children?: React.ReactNode, height: number, width: number }) => {
  return (
    <div className={`h-[95%] w-[95%] mx-auto my-auto `}>
      {children}
    </div>
  )
}

export default Container