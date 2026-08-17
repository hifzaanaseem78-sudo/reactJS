import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 3;

  const addValue = () => {
    if(counter < 20) {
    // counter = counter + 1;
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    console.log("added", counter);
    }
    else {
      counter = 20;
    }
  }

  const removeValue = () => {
    if(counter > 0) {
    counter = counter - 1; 
    setCounter(counter);
    }
    else {
      counter = 0;
    }
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <button onClick={removeValue}>remove value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
