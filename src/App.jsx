import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Home from './pages/Home';
import SingleBlog from './pages/SingleBlog';
import Error from './pages/Error';
import Blog from './pages/Blog'
import Winners from './pages/Winners';
import Gallery from './pages/Gallery';
import FooterSection from './components/FooterSection';
import Loading from './components/Loading';

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Assuming 'load' event is for the whole window to ensure all resources are loaded
  //   const handleLoad = () => {
  //     setLoading(false);
  //   };

  //   // Add event listener for 'load'
  //   window.addEventListener('load', handleLoad);

  //   // Remove event listener on cleanup
  //   return () => window.removeEventListener('load', handleLoad);
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='winners' element={<Winners />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='blog/:blog_id' element={<SingleBlog />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <FooterSection />
      </Router>
    </>
  );
}

export default App;
