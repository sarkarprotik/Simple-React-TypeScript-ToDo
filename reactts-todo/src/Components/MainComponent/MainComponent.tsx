import React, { useState } from 'react'

import ToDo from '../ToDo/ToDo'
import AddToDo from '../AddTodo/AddTodo'

export type List = {
  id: number
  name: string
}

export type DeleteToDo = {
  deleteTodo: () => void
}

const MainComponent: React.FC = () => {
  const [list, setList] = useState([{ id: 1, name: 'apples' }])

  const AddItemToList = (toDoItem: string) => {
    let newItem = { id: Math.random(), name: toDoItem }
    const newList = [...list, newItem]
    setList(newList)
  }
  const deleteToDo = (id: number) => {
    const deletedList = list.filter((listItem: List) => {
      return listItem.id !== id
    })
    setList(deletedList)
  }
  return (
    <div>
      <p>To Do App with React and Typescript</p>
      <AddToDo AddToDo={AddItemToList} />
      <ToDo list={list} deleteToDo={deleteToDo} />
    </div>
  )
}

export default MainComponent
