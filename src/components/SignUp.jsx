import {useState} from 'react'
import {useNavigate, Link} from "react-router-dom"

import reactLogo from "../assets/free-4.png"
import { useUserAuth } from '../context/UserAuthProvider'
import {GoogleButton} from 'react-google-button'

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const {signUp} = useUserAuth()
    const navigate = useNavigate()
    

   const handleSubmit = async (e) => {
    e.preventDefault()


    setError("")

    try{
      await signUp(email, password)
      navigate("/")

    } catch (err){
      setError(err.message)
    }
  }





  return (
    <section className='section'>
     
        <aside>
            <div className='logo'>
                <img src={reactLogo } alt="React-icon" />

            </div>
        </aside>
        <aside>
            <form onSubmit={handleSubmit}>
                <div  className='input-block text-name'>
                    <input
                     type="email"
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                         />
                </div>
                <div className='input-block text-pass'>
                    <input
                     type='password' 
                     placeholder='Password' 
                     onChange={(e) => setPassword(e.target.value)}
                     />
                </div>

                <div className='input-block text-btn'>
                    <button type="submit">SignUp</button>
                </div>
                <p style={{textAlign: "center", color: "white"}}>Do You have an account? <Link to='/'>LogIn</Link> </p>
            </form>
            {/* <div className='g-goo'>
                
                
            </div> */}

        </aside>
      
    </section>
  )
}

export default SignUp
