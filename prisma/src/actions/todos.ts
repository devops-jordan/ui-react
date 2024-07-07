"use server"
import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

const getAllTodos = async () => {
  try {
    return prisma.todo.findMany({})

  } catch (error) {
    console.log('error ', error)
    return false
  }
}


const createTodo = async (formData: FormData) => {
  console.log(formData)
  try {
    await prisma.todo.create({
      data: {
        title: 'sdsd',
        name: formData.get('name') as string,
        slug: (formData.get('date') as string).replace(/\s+/g, '-').toLowerCase(),
        date: new Date()
      }
    })
    revalidatePath('/')
  } catch (error) {
    console.log('Somwthing wrong', error)
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