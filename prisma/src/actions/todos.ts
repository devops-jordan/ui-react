"use server"
import { prisma } from "@/lib/db"

const getAllTodos = async () => {

  // setTimeout(() => {
  // }, 2000)
  try {
    return prisma.todo.findMany({})

  } catch (error) {
    console.log('error ', error)
    return false
  }
}   


const createTodo = async ({ name }: { name: string }) => {
  try {
    await prisma.todo.create({ data: { name } })
  } catch (error) {
    console.log('Somwthing wrong')
  }
}

const deleteByid = async ({ id }: { id: string }) => {
  try {
    await prisma.todo.delete({ where: { id } })
  } catch (error) {
    console.log("Something wrong deleting by id")
  }
}

export { getAllTodos, createTodo, deleteByid }