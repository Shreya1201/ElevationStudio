import React, { useState, useEffect } from "react";
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
  const [animationFinished, setAnimationFinished] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationFinished(true);
    }, 4500);
  }, []);
  return (
    <div>
      {!animationFinished ? (
        <Animation />
      ) : (
        <>
          <NavbarG />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="*" element={<Pagenotfound />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
