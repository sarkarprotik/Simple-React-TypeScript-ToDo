import React, { useState } from 'react'
import { List } from '../../MainComponent/MainComponent'
import ToDo from '../../ToDo/ToDo'
import { MainContainer, PurpleContainer, HeadContainer, ItemContainer, Input, Span } from './styled'
import { width, height } from '../../../utils/variable'

interface Props {
  AddToDo: (value: string) => void
  list: List[]
  deleteToDo(value: number): void
}

const BrowserAsset: React.FC<Props> = ({ AddToDo, list, deleteToDo }) => {
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
    <MainContainer style={{ marginLeft: width / 4, marginTop: height / 8 }}>
      <HeadContainer />
      <PurpleContainer>
        <ItemContainer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Span>ADD ITEM: </Span>
            <div>
              <form onSubmit={e => handleSubmit(e)}>
                <Input type="text" value={inputValue} onChange={e => handleChange(e)} />
              </form>
            </div>
          </div>
          <div
            style={{
              borderColor: 'black',
              marginTop: '200px'
            }}
          >
            <ToDo list={list} deleteToDo={deleteToDo} />
          </div>
        </ItemContainer>
        <img
          style={{ position: 'absolute', bottom: -height / 9 }}
          src={require('../../../Assets/art.svg')}
          alt="logo of a man sitting on his laptop"
        />
      </PurpleContainer>
    </MainContainer>
  )
}

export default BrowserAsset
