import React, { useState } from 'react'
import { useLocale } from '../../hooks/useLocale'
import { useTranslation } from "react-i18next";
  
const Dropdown = () => {
    const {t} = useTranslation();
    const { changeLanguage } = useLocale();
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const handleLanguage = (e) => {
        e.preventDefault();
        
        if(e.target.innerText == 'Inglês' || e.target.innerText == 'English') {
            changeLanguage('en'); 
        } else if (e.target.innerText === 'Português' || e.target.innerText === 'Portuguese') {
            changeLanguage('pt'); 
        }
        setClick(false);
    };

    return (
        <>
            <section className='drop-section'>
                <ul onClick={handleClick} className={click ? 'drop-menu' : 'dropdown-menu'}>
                    {t("dropdown", {returnObjects: true}).map((item, index) => {
                        return (
                            <li key={index}>
                                <a className='menu-items' onClick={handleLanguage}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}
  
  export default Dropdown;