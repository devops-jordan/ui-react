"use client"
import React, { useEffect } from 'react'
import CreateButton from './CreateTask'
import useModalHook from '@/hooks/useModalStatus'
import ModalCreateTask from './ModalCreateTask'

const Main = () => {
  const { active, closeModal, openModal } = useModalHook()

  return (
    <div className='relative'>
      <h1 hidden={active} className='transition-all duration-150'>Noting There {active.toString()}</h1>
      <CreateButton openModal={openModal} active={active} />
      <ModalCreateTask active={!active} closeModal={closeModal} />
    </div>
  )
}

export default Main