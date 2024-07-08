"use client"

import { useAppContext } from '@/context/app.context'
import React from 'react'

const Main = () => {
  const { status, title } = useAppContext()
  return (
    <div>{title}</div>
  )
}

export default Main