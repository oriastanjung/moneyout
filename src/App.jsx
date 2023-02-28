import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes , Route} from 'react-router-dom'
import Home from './page/Home'
import Add from './page/Add'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<Home />}  path="/"/>
      <Route element={<Add />}  path="/add"/>
    </Routes>
  )
}

export default App
