"use server"
import { prisma } from "@/lib/prisma"

const getAllTodos = async () => {

  // setTimeout(() => {
  // }, 2000)
  return prisma.todo.findMany({})
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

export { getAllTodos, createTodo,deleteByid }