import { getAllTodos } from '@/actions/todos'
import React from 'react'
import Card from './Card'
import Main from './Main'
import ContainerComponent from './ContainerComponent'

const Todos = async () => {
  const todos = await getAllTodos()
  if (!todos) {
    return <p>Renderizando </p>
  }
  return (
    <ContainerComponent name='Todos'>
      {todos.length === 0 ? (
        <Main />
      ) : (
        <div>
          {todos.map((td) => (
            <Card key={td.id} name={td.name} id={td.id} date={td.date} />
          ))}
        </div>
      )}
    </ContainerComponent>
  )
}

export default Todos