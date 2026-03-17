import { useState } from 'react'
import Navigation from './components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation isLogin={true}></Navigation>
    </>
  )
}

export default App
