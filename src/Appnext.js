import React from "react";
/*import Navbar from './components/Navbar';
import GlobalStyle from './components/globalStyle';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';*/
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Animation from "./pages/Animation";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Work from "./pages/Work";
import NavbarG from "./pages/NavbarG";
import Pagenotfound from "./pages/Pagenotfound";
function App() {
  return (
    <div>
      <NavbarG />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/animation" element={<Animation />} />
        <Route exact path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
