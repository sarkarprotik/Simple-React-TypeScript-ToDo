import React, { useState } from 'react'
import BrowserAsset from './Components/common/BrowserAsset'
import ToDo from './Components/ToDo/ToDo'

export type List = {
  id: number
  name: string
}

export type DeleteToDo = {
  deleteTodo: () => void
}

const App: React.FC = () => {
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
      <BrowserAsset AddToDo={AddItemToList} list={list} deleteToDo={deleteToDo} />
    </div>
  )
}

export default App
