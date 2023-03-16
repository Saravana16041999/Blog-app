import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { appcontext } from '../../App'
import './CreateNew.css'

const CreateNew = () => {
  const navagate = useNavigate()
  const {settitle, setcontent,CreatePost,login} = useContext(appcontext)

  useEffect(()=>{
    if(!login){
      navagate('/')
    }
  })
  return (
    <section className='create-new'>
      <div className='title-continer'>
        <label className='title'>Title</label>
        <input type="text"  className='title-input' onChange={(e)=> settitle(e.target.value)}/>
      </div>
      <div className='content-continer'>
        <label className='content'>Content</label>
        <textarea className='content-input' onChange={(e)=> setcontent(e.target.value)}></textarea>
      </div>
      <button className='btn-submit' onClick={CreatePost}>Submit</button>
    </section>
  )
}

export default CreateNew