import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from '../firebase'
import {Fragment, useState} from 'react'
import axios from 'axios'
import { useUserAuth } from '../context/UserAuthProvider'
import { useNavigate } from 'react-router-dom'

const SearchComp = () => {
    const [user, setUser] = useState({})
    const {logOut} = useUserAuth()
    const navigate = useNavigate()

    console.log(user)

       const fetchFcPoints = async (username) => {
        console.log(username)
  try {
    const { data } = await axios(`https://api.freecodecamp.org/api/users/get-public-profile?username=${username}`)
    const points = data.entities?.user[username].points
    const fullName = data.entities?.user[username].name
    const image = data.entities?.user[username].picture
    // console.log(data)

    if (!points) {

     return new Error('not found')
    } else{
     
      
      try {
      const docRef =   await addDoc(collection(db, "users"),{
          fullName: fullName,
           name: username, 
           point: points,
           image:image 

      })

      console.log(docRef)

        
      } catch (error) {
        console.log(error.message)
        
      }

      // setUser({...user, fullName: fullName, name: username, point: points, image:image })
    }
      
    
      
    // return { points, username }
  } catch (error) {
    return error
  }
}


// const querySnapshot = getDocs()


    

    const handleSubmit = (e) => {
        e.preventDefault()
        let input = e.target.elements[0].value;
        e.target.elements[0].value = ""
        fetchFcPoints(input)


    }

    const handleSignOut = async() => {
      try {
       await logOut()
        navigate("/")
        

        
      } catch (error) {
        console.log(error.message)
        
      }

    }

  return (
  <Fragment>
    <form className='search-input' onSubmit={handleSubmit}>
      <input 
      type="text" 
      name="" id=""  
      placeholder='Seach Input'
    //   onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit'>Search</button>
      
    </form>
    <button onClick={handleSignOut}>LogOut</button>
    </Fragment>
  )
}

export default SearchComp
