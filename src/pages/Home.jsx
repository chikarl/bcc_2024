import React from 'react'
import Header_img from '../components/Header_img'
import Header from '../components/Header'
import Register from '../components/Register'
import Timeline from '../components/Timeline'
import Gallery from '../components/Gallery'
import Partners from '../components/Partners'
import BlogSection from '../components/BlogSection'
import Steps from '../components/Steps'
import Carousel from '../components/Carousel'
import HeaderCarousel from '../components/HeaderCarousel'
import FooterSection from '../components/FooterSection'
import FaqSection from '../components/FaqSection'
import ContactSection from '../components/ContactSection'
import CriteriaSection from '../components/CriteriaSection'
import Top3Section from '../components/Top3Section'

function Home() {
  return (
    <div>
      {/* <h2>Home page</h2> */}
      <Header />
      <HeaderCarousel />
      {/* <Header_img /> */}
      <Register />
      {/* <Timeline /> */}
      <Steps />
      <Partners />
      <Top3Section />
      <CriteriaSection />
      <BlogSection />
      <Gallery />
      <ContactSection />
      <FaqSection />
      {/* <FooterSection /> */}
    </div>
  )
}

export default Home
