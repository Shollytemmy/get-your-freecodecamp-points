import {useState} from 'react'
import {useNavigate, Link} from "react-router-dom"

import reactLogo from "../assets/free-4.png"
import { useUserAuth } from '../context/UserAuthProvider'
import {GoogleButton} from 'react-google-button'

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const {logIn, signInWithGoogle} = useUserAuth()
    const navigate = useNavigate()
    // console.log(logIn(email, password))

   const handleSubmit = async (e) => {
    e.preventDefault()


    setError("")

    try{
      await logIn(email, password)
      navigate("/home")

    } catch (err){
      setError(err.message)
    }
  }


const handleGoogleSignIn = async(e) => {
    e.preventDefault()

    setError("")
    try{
        await signInWithGoogle()
        navigate("/home")
        

    } catch (err) {
        console.log(err.message)
        setError(err.message)
    }
}

    
    // console.log(useUserAuth())
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
                    <button type="submit">Login</button>
                    <GoogleButton
                className='g-btn gop-btn'
                type='dark'
                style={{width: "100%"}}
                onClick={handleGoogleSignIn}
                
                  />
                </div>
                <p style={{textAlign: "center", color: "white"}}>Don't have an account? <Link to='/signup'>SignUp</Link> </p>
            </form>
            

        </aside>
      
    </section>
  )
}

export default SignIn
