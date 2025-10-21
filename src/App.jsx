import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyAI from './components/WhyAI'
import WhyMCP from './components/WhyMCP'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <WhyAI />
            <WhyMCP />
            <Contact />
            <Footer />
        </div>
    )
}

export default App

