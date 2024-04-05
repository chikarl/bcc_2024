import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleBlog from './pages/SingleBlog'

function App() {
  return (
    <Home />
    // <Router>
    //   <Routes>
    //     <Route path='/' exact ={<Home />} />
    //     <Route path='blog/:id' exact ={<SingleBlog />} />
        
    //   </Routes>
    // </Router>
  )
}

export default App
