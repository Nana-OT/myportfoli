import React from 'react'
import Hero from './Hero'
import Skills from './Skills'
import Footer from './Footer'
import NavBar from './NavBar'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Skills/>
        <Footer/>
    </div>
  )
}
