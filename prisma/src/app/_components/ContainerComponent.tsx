import React from 'react'

const ContainerComponent = ({ children, name, ...props }: { children: React.ReactNode, name: string, props: React.HTMLAttributes<HTMLDivElement> }) => {
  return (
    <div className='p-[5px] border border-white rounded-md relative'>
      <span className='absolute tracking-tighter text-[9px] px-[5px] right-0'>app.component.{name}</span>
      {children}
    </div>
  )
}

export default ContainerComponent