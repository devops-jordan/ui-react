import { getAllTodos } from '@/actions/todos'
import React from 'react'
import Card from './Card'
import Main from './Main'

const Todos = async () => {
  const todos = await getAllTodos()
  if (!todos) {
    return <p>Renderizando </p>
  }
  return (
    <div>
      {todos.length === 0 ? (
        <Main />
      ) : (
        <div>
          {todos.map((td) => (
            <Card key={td.id} name={td.name} id={td.id} date={td.date} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Todos