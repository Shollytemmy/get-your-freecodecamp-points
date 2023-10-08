import {useState} from 'react'
import {useNavigate, Link} from "react-router-dom"

import reactLogo from "../assets/free-4.png"
import { useUserAuth } from '../context/UserAuthProvider'


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
                <div>
                <img src={reactLogo } alt="React-icon" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, sed!
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, sed!
                </p>
              </div>

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
            

        </aside>
      
    </section>
  )
}

export default SignUp
