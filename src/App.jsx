import React, { useContext } from "react";
import { ThemeContext } from "./context";
import Navbar from "./components/navbar/Navbar";

import Intro from "./pages/intro/Intro";
import About from "./pages/about/About";
import ProductList from "./pages/productList/ProductList";
import Contact from "./pages/contact/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#2E3047" : "#3BBA9C",
        color: darkMode ? "#3BBA9C": "#2E3047",
      }}
    >
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
