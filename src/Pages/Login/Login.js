import React, { useContext } from 'react'
import './Login.css'
import { auth , provider } from '../../Firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { appcontext } from '../../App'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate()

  const {setlogin} = useContext(appcontext)

  const SignInWithGoogle = () =>{
    signInWithPopup(auth,provider).then((result)=>{
      localStorage.setItem("login", true );  
      setlogin(true);
      navigate('/')
    })
  }

  return (
    <section className='Login'>
      <h1 className='Log-in-container'>LogIn</h1>
      <button className='btn-login' onClick={SignInWithGoogle} >Sign in with <FcGoogle/></button>
    </section>
  )
}

export default Login