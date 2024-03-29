import React, {useContext} from "react";
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
import { LocaleContext } from './contexts/LocaleContext'
import { useTheme } from "./hooks/useTheme";

const App = () => {
  const currentLanguage = useContext(LocaleContext);
  const { theme } = useTheme();
  return (
    <div className={`${theme ? 'dark': 'light'}`}>
      <Navbar/>
      <Home/>
      <About/>
      <ProductList/>
      <Skills language={currentLanguage.locale}/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
