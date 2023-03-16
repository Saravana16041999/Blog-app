import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './nav.css'
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useContext } from 'react';
import { appcontext } from '../../App';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase-config';

const Navbar = () => {
  const navigater = useNavigate()
  const {login ,setlogin} = useContext(appcontext)

  const SignUserOut = ()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setlogin(false)  
       navigater('/Login') 
    })
  }

  return (
    <>
        <nav className='nav'>
        <div className='title'>
          <h1>Blog One</h1>
        </div>
        <div className='nav-container'>
        <Link to='/' className='home-one'>Home</Link>
        
        {!login ? <Link to='Login' className='login-btn'>Login</Link> :
        <>
        <Link to='CreateNew' className='create-one'><MdOutlineAddCircleOutline/>New</Link>
        <button className='logout-btn' onClick={SignUserOut}>Logout</button>
        </> 
        }

        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar