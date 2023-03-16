import React, { useEffect, useState } from 'react'
import './Home.css'
import {collection, getDocs } from 'firebase/firestore' 
import { db } from '../../Firebase-config'
import Posts from '../../components/others/Posts';

const Home = () => {
  const [posts,setposts] = useState([]);

  useEffect(()=>{
    const getposts = async()=>{
      const data = await getDocs(collection(db,'posts'))
      const userdata = data.docs.map((doc)=>({ ...doc.data(), id: doc.id })) 
      setposts(userdata)
    }
    getposts()
  },[])


  return (
    posts.map((post)=>{
      return(
          <Posts key={post.id} {...post}/>
      )
    })
    
  )
}

export default Home