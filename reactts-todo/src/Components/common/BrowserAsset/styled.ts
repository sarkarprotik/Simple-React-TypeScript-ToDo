import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f2f2f2;
  width: 90vh;
  height: 70vh;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 2px 2px 10px 1px #1c1b1b;
`

export const HeadContainer = styled.div`
  background-color: #3f3d56;
  width: inherit;
  height: 20px;
  z-index: 1;
  position: absolute;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const PurpleContainer = styled.div`
  background-color: #6c63ff;
  width: 30vh;
  height: inherit;
  z-index: 0;
  position: absolute;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`
export const ItemContainer = styled.div`
  flex-direction: row;
  text-align: center;
  position: relative;
  z-index: 1;
  top: 20%;
  left: 150%;
`
export const Input = styled.input`
  background-color: #d0cde1;
  border: solid;
  border-width: 1px;
  height: 22px;
  width: 120px;
`

export const Span = styled.span`
  margin: 2px;
  font-size: 20px;
  margin-right: 20px;
  width: 150px;
`
