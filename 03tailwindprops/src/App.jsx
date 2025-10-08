import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Nandini",
    age: 21
  }
  let newArr= [1,2,3]

  return (
    <>
  <Card userName="chaiaurcode"/>
  <Card userNmae="Nandini"/>
  </>
    
  )
}

export default App
