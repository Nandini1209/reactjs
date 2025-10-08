import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]= useState(15)
  // setCounter is function used to update the counter value. name can be of your choice but format must be same.
  //let counter = 15 [ALREADY A VARIABLE IS DECLARED BUT THIS VARIABLE CAN'T BE SEEN IN THE UI]

  const addValue = () => {
    //counter = counter + 1 // OR: comment out this
    //OR:setCounter(counter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    //INTERVIEW QUESTION

    //OR:setCounter(counter+1)
   
  }
  const decreaseValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
       <h1>Chai aur react</h1>
       <h2>Counter value: {counter} </h2>
       <button onClick = {addValue}>Add value</button>
       <br></br>
       <button onClick= {decreaseValue}>Decrease value</button>
     </>
  )
}

export default App
