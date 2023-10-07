import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './components/SignIn'
import {UserAuthProvider} from "./context/UserAuthProvider"
import Home from './pages/Home'
import SignUp from './components/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UserAuthProvider>
        <Routes>
          <Route path='home' element={<Home  />}  />
          <Route path="/" element={<SignIn  />}  />
          <Route path='signup' element={<SignUp  />}  />
        </Routes>

      
      </UserAuthProvider>
      
     

    </div>
  )
}

export default App
