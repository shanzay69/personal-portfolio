import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
export default function page() {
  return (
    <div>
      <Hero/>
      <Skills/>
      <Contact/>
      <About/>
      <Footer/>
    </div>
  )
}
