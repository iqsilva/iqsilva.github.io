import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import ProductList from "./pages/productList/ProductList";
import Timeline from "./pages/timeline/Timeline";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import "./styles/css/App.css";
import './i18n'
import { LocaleProvider } from './contexts/LocaleContext'

const App = () => {
  return (
    <div>
      <LocaleProvider>
        <Navbar/>
        <Home/>
        <About/>
        <ProductList/>
        <Skills/>
        <Timeline/>
        <Contact/>
        <Footer/>
      </LocaleProvider>
    </div>
  );
};

export default App;
