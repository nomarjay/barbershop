import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./css/style.css";

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>      
      <Footer />      
    </Router>
  );
}

export default App;
