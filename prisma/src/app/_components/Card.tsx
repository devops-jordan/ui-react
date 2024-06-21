'use client'
import { deleteByid } from '@/actions/todos'
import useModalHook from '@/hooks/useModalStatus'
import React from 'react'

export interface CardUI {
  id: string
  name: string
  date: Date
}

const Card = ({ id, name, date }: CardUI) => {
  const { active, openModal, closeModal } = useModalHook()
  const deleteCard = async (id: string) => {
    deleteByid({id})
  }
  return (
    <section
      className={`bg-[#454c5a] shadow-md rounded-md p-2 text-[13px] transition-all duration-150 hover:scale-[1.02] relative flex justify-between items-center`}
      onMouseEnter={()=>openModal()}
      onMouseLeave={()=>closeModal()}>
      <section
        className={` ${active ? 'opacity-60' : ''}`}
      >
        <div>
          <p className='text-[12px]'>{id}</p>
        </div>
        <div>
          {name}
        </div>
        <div>
          {date.toDateString()}
        </div>
      </section>
      <section hidden={!active}>
        <div className='flex gap-3'>
          <button className='bg-green-600 px-2 rounded-md shadow-sm'>
            Edith
          </button>
          <button
            onClick={async () => await deleteCard(id)}
            className='bg-red-600 px-2 rounded-md shadow-sm'>
            Delete
          </button>
        </div>
      </section>
    </section>
  )
}

export default Card