import React, { useContext, useState } from 'react'
import { FcLikePlaceholder,FcLike } from "react-icons/fc";
import { AiFillDelete} from "react-icons/ai";
import { deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../Firebase-config';
import { appcontext } from '../../App';
const Posts = ({title,content,authorName,id,authorId}) => {
    const [react,setreact] = useState(false)

    const {login} = useContext(appcontext)

    const DeletePost = async(id)=>{
      const postDoc = doc(db,"posts",id)
      await deleteDoc(postDoc)
    }
  return (
    <section className='post'>
      <div className='new-post'>
         <h1 className='title-post'>{title}</h1>
         <p className='content-post'>{content}</p>
         <div className='author'>
            <small className='author-name'>Created By : {authorName}</small>
         </div>
         <button className='like-btn' onClick={()=> setreact(!react)}>
         {react ? <FcLike/> : <FcLikePlaceholder/> } 
         </button>
         {login && authorId === auth.currentUser.uid && <button className='delete-btn' onClick={()=> DeletePost(id)}><AiFillDelete/></button>} 
      </div>
    </section>
  )
}

export default Posts