import { useState } from 'react'
import Navigation from './components/Navigation'
import  axios from 'axios'
import CardList from './components/CardList'
 

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <Navigation isLogin={true}></Navigation>
      <CardList></CardList>
    </>
  )
}

export default App
