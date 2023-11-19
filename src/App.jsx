import React from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./pages/intro/Intro";
import About from "./pages/about/About";
// import Skills from "./pages/skills/Skills";
import ProductList from "./pages/productList/ProductList";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="dark">
      <Navbar />
      <Intro />
      <About />
      {/* <Skills /> */}
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
