import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Qualification from './components/Qualification.jsx'
function App() {
    return (
        <>
            <Header />
            <About/>
            <Qualification/>
            <Projects/>
            <Contact/>
            <Footer/>


        </>
    )
}

export default App
