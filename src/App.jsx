import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './shared/Navbar/Navbar'
import Footer from './shared/Footer/Footer'
import About from './pages/about/About'
import Home from './pages/Home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from './pages/Layout/Layout';

function App() {
  return (
    <>
      <Navbar />
      <Layout/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;