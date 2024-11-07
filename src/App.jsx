import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Verify from './components/Verify'
import SignIn from './components/SignIn'
import SetupInformation from './components/SetupInformation'
import AvtAndInformation from './components/avtAndInformation'
import PostInProfile from './components/postInProfile'
import CreatePost from  './components/createPost'

function App() {  
  return (
    <div>
      <CreatePost />  
    </div>
  );
}


export default App
    