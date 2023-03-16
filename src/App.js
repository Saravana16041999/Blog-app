import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './components/nav/Navbar'
import Login from './Pages/Login/Login';
import CreateNew from './Pages/CreateNew/CreateNew';
import { createContext, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from './Firebase-config';

export const appcontext = createContext()



function App() {
  const [login, setlogin] = useState(localStorage.getItem("login"))
  const [title,settitle] = useState('')
  const [content,setcontent] = useState('')

  const PostCollectionRef = collection(db,'posts')
  const CreatePost = async () =>{
      await addDoc(PostCollectionRef,{
        title, 
        content
        ,authorName: auth.currentUser.displayName, 
        authorId: auth.currentUser.uid})
        window.location.pathname = '/'
  }

  return (
    <main>
    <appcontext.Provider value={{setlogin , login, title, settitle, content, setcontent,CreatePost}}>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element = {<Navbar/>}>
          <Route index element ={<Home/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='CreateNew' element={<CreateNew/>} /> 
          </Route>
        </Routes>
      </BrowserRouter>
      </appcontext.Provider>
    </main>
  );
}

export default App;
