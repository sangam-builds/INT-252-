import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name="Rahul"
  const course="Btech"
  const sem=1

  return (
    <>

    <h1>My Intro</h1>
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Sem: {sem}</p>
    </>
  )
}

export default App
