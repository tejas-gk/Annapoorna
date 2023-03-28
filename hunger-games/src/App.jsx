import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/Card'
import viteLogo from '/vite.svg'
  

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className='card_holder'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}

export default App
