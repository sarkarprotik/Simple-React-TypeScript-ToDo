import React from 'react'
import { List } from '../MainComponent/MainComponent'

interface Props {
  list: List[]
  deleteToDo(value: number): void
}

const ToDo: React.FC<Props> = ({ list, deleteToDo }) => {
  const whatToShow = list.length ? (
    list.map(item => (
      <div
        style={{
          backgroundColor: '#6C63FF',
          margin: '10px',
          borderRadius: '2PX',
          height: '30px',

          justifyItems: 'center',
          boxShadow: '1px 1px 5px 0.1px #1c1b1b'
        }}
        key={item.id}
      >
        <span style={{ color: 'white' }} onClick={() => deleteToDo(item.id)}>
          {item.name}
        </span>
      </div>
    ))
  ) : (
    <p>'Nothing to show!'</p>
  )

  return <div>{whatToShow}</div>
}

export default ToDo
