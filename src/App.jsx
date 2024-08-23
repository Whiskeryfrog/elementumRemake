import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/HeroSection.jsx'
import Footer from './components/Footer.jsx'
import AnotherPage from './pages/AnotherPage.jsx'
import SignUp from './pages/SignUp.jsx'
import LogIn from './pages/LogIn.jsx'
import About from './pages/About.jsx'
import { onSnapshot, collection } from "@firebase/firestore"
import db from "./firebase"
import 'boxicons'

function App() {

  useEffect(() =>{
    onSnapshot(collection(db, "colors"), (snapshot) => {
      console.log(snapshot.docs.map(doc => doc.data()));
    });
  })

  return (
    <>
      <Header name=""/>
      <Routes>
        <Route path="/" element={<Hero name="Molech"/>}/>
        <Route path="/Register" element={<SignUp />}/>
        <Route path="/LogIn" element={<LogIn />}/>
        <Route path="/AnotherPage" element={<AnotherPage />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
