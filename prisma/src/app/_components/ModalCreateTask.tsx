"use client"
import { createTodo } from '@/actions/todos'
import React, { FormEvent, useState } from 'react'

const ModalCreateTask = ({ active, closeModal }: { active: boolean, closeModal: () => void }) => {
  const [name, setName] = useState('')

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    await createTodo({ name })
    closeModal()
  }

  return (
    <form className={`${active ? 'hidden' : 'flex flex-col gap-3'}`}>
      <h1>Create Task</h1>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Write your notes' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='flex flex-col '>
        <label htmlFor="date">Date</label>
        <input type="date" placeholder='Write your notes' />
      </div>
      <div>
        <button
          className='tracking-tighter bg-[#2182ab] px-2 rounded-sm shadow-md transition-all  duration-200 hover:bg-[#175b77] hover:scale-105'
          onClick={submitForm}
        >
          Create
        </button>
      </div>
    </form>
  )
}

export default ModalCreateTask