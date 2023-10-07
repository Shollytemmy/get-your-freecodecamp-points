import React from 'react'
import Navbar from '../components/Navbar'
import { useUserAuth } from '../context/UserAuthProvider'
import SearchComp from '../components/SearchComp'

const Home = () => {
  const {user, signOut} = useUserAuth()
  


  
  
  return (
    <section className=''>
      <Navbar  />

      <div className="home">

      {/* <h1>Welcome Home: {user.email}</h1> */}
      <SearchComp  />
      </div>

    </section>
  )
}

export default Home
