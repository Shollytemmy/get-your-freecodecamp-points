import {useState} from 'react'
import logo from "../assets/free-4.png"
import { useUserAuth } from '../context/UserAuthProvider'
import Dropdown from './Dropdown'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {user} = useUserAuth()
  console.log();
  

  return (
    <header className='header'>
        <nav>
            <img src={logo} alt="Freecodecamp" />
        </nav>

        <div onClick={() => setIsOpen(!isOpen)}>
            {/* <button>Logout</button> */}
            <p>
              
            </p>
        </div>
            

      
    </header>
  )
}

export default Navbar
