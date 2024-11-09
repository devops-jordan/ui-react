"use client"
import useModalHook from '@/hooks/useModalStatus'
import React from 'react'

const CreateButton = ({ openModal, active }: { openModal: () => void, active: boolean }) => {

  return (
    <button
      onClick={openModal}
      disabled={active}
      className={`px-2 rounded-sm text-[14px] font-bold transition-all duration-150  bg-sky-600  ${active ? 'blur-sm opacity-15' : 'hover:text-[15px] hover:scale-105'}`}>
      Create Task {active.toString()}
    </button>
  )
}

export default CreateButton