import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: "Hifza",
    age: 21,
    btnText: "click me!"
  }

  let newArr = [1, 2, 3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
     <Card userName="chai aur code" btnText="click me!"/>
     <Card userName="Hifza" btnText="visit me!"/>
    </>
  )
}

export default App
