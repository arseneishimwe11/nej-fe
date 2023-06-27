import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './components/pages/Login'
import SignupPage from './components/pages/Signup'
import ImageUpload from './components/pics/ImageUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <Layout/>  */}
     <Router>
        <Routes>
           <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />       
            <Route path='/dashboard' element={<Layout/>} />
            <Route path='/image' element={<ImageUpload/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
