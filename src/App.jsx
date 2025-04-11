import { useState } from 'react'
import { Header, Main, About, Skills, Projects, ContactMe } from './components/index.js'


function App() {


  return (
    <>
    <div className='h-screen w-screen bg-[#151925]'>
    <Header />
    <Main />
    <About />
    <Skills />
    <Projects />
    <ContactMe />
    </div>
    
    </>
  )
}

export default App
