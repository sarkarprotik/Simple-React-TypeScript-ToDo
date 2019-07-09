import React, { useState } from 'react'

interface Props {
  AddToDo: (value: string) => void
}

const AddToDo: React.FC<Props> = ({ AddToDo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: any) => {
    const value = e.target.value
    setInputValue(value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(inputValue)
    AddToDo(inputValue)
    setInputValue('')
  }
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Something"
          value={inputValue}
          onChange={e => handleChange(e)}
        />
      </form>
    </div>
  )
}

export default AddToDo
