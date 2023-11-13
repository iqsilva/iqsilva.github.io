import React from "react";
import Intro from "./pages/intro/Intro";
import About from "./pages/about/About";
import ProductList from "./pages/productList/ProductList";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
