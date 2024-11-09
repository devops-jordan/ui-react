import { prisma } from '@/lib/db'
import React from 'react'

const page = async ({ params }: { params: { slug: string } }) => {
  const todo = await prisma.todo.findUnique({
    where:{
      slug: params.slug
    }
  })
  return (
    <div>{todo?.name}</div>
  )
}

export default page