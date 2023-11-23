import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import ProductList from "./pages/productList/ProductList";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import "./styles/css/App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <ProductList />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
