import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleBlog from './pages/SingleBlog';
import Error from './pages/Error';
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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='blog/:blog_id' element={<SingleBlog />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <FooterSection />
      </Router>
    </>
  );
}

export default App;
