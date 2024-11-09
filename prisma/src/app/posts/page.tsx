import { prisma } from '@/lib/db'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const todos = await prisma.todo.findMany({
    orderBy: { id: 'asc' },
    select: {
      date: true,
      id: true,
      name: true,
      slug: true
    }
  })
  return (
    <>
      {todos.map(todo => (
        <li key={todo.id} className='flex items-center justify-between px-5'>
          <Link href={`/posts/${todo.slug}`}>
            {todo.name}
          </Link>
        </li>
      ))}
    </>
  )
}

export default page