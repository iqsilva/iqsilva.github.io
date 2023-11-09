import React, { useContext } from "react";
import { ThemeContext } from "./context";
import Navbar from "./components/navbar/Navbar";

import Intro from "./pages/intro/Intro";
import About from "./pages/about/About";
import ProductList from "./pages/productList/ProductList";
import Contact from "./pages/contact/Contact";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Navbar />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
