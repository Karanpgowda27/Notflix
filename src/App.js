import { Grid } from '@mui/material'
import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Help from './components/Help'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <Grid container sx={{backgroundColor: 'black'}}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer/>
    </Grid> 
  )
}

export default App