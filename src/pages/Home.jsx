import React from 'react'
import Header_img from '../components/Header_img'
import Header from '../components/Header'
import Register from '../components/Register'
import Timeline from '../components/Timeline'
import Gallery from '../components/Gallery'
import Partners from '../components/Partners'
import Carousel from '../components/Carousel'
function Home() {
  return (
    <div>
      {/* <h2>Home page</h2> */}
      <Header />
      <Header_img />
      <Register />
      <Timeline />
      {/* <Carousel /> */}
      <Partners />
      <Gallery />
    </div>
  )
}

export default Home
