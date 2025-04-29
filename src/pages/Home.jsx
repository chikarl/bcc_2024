import React from "react";
import Header from "../components/Header";
import Register from "../components/Register";
import Gallery from "../components/Gallery";
import Partners from "../components/Partners";
import BlogSection from "../components/BlogSection";
import Steps from "../components/Steps";
import HeaderCarousel from "../components/HeaderCarousel";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import CriteriaSection from "../components/CriteriaSection";
import Top3Section from "../components/Top3Section";
import TeamCarousel from "../components/TeamCarousel";
import Exhibition from "../components/Exhibition";
function Home() {
  return (
    <div>
      <Header />
      <HeaderCarousel />
      <Exhibition />
      <Register />
      <Steps />
      <Partners />
      <Top3Section />
      <TeamCarousel />
      <CriteriaSection />
      <BlogSection />
      <Gallery />
      <ContactSection />
      <FaqSection />
    </div>
  );
}

export default Home;
