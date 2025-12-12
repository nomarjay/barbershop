import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./css/style.css";

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from './pages/Gallery'
import BookNow from './pages/BookNow'

function App() {
  return (
    <Router>
      <Navbar />      
      <div class="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/BookNow" element={<BookNow />} />
        </Routes>
      </div>
      <Footer />      
    </Router>
  );
}

export default App;
