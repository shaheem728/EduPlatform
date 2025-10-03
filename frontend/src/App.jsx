import { useState } from 'react'
import Programs from './components/Programs'
import Services from './components/Services'
import Achievement from './components/Achievement'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials'
import AppPromo from './components/AppPromo'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
     < >
     <Navbar/>
     <Home/>
     <Programs/>
     <Courses/>
     <Achievement/>
     <Services/>
     <Testimonials/>
     <AppPromo/>
     <Footer/>
    </>
  )
}

export default App
