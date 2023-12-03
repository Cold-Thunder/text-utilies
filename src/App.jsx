import { useState } from 'react'
import './App.css'
import TextUtil from "./components/textUtil/TextUtil"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TextUtil />
    </>
  )
}

export default App
