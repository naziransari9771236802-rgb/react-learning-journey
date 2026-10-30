import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)
  const addValue = () => {
    if(counter < 20){
      setCounter(counter +1)
      console.log("clicked", counter)
    }
    // _____Practice or interview question_______
    setCounter(Prevcounter => Prevcounter + 1)
    setCounter(Prevcounter => Prevcounter + 1)
    setCounter(Prevcounter => Prevcounter + 1)
    setCounter(Prevcounter => Prevcounter + 1)
    setCounter(Prevcounter => Prevcounter + 1)
    
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter -1)
      console.log("clicked", counter)
    }
    // setCounter(counter -1)
    // console.log("clicked", counter)
  }
  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value: {counter}</h2>
     
     <button
     onClick={addValue}
     >Add Value{counter}
     </button>
     <br/>
     <button
     onClick={removeValue}
     >Remove Value{counter}
     </button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
