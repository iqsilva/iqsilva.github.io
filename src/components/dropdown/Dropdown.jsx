import React, { useState } from 'react'
import MenuItems from './MenuItems'
import './dropdown.css'
import { useLocale } from '../../hooks/useLocale'
  
const Dropdown = () => {
    const { changeLanguage } = useLocale();
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const handleLanguage = (e) => {
        e.preventDefault();
        
        if(e.target.innerText == 'English') {
            changeLanguage('en'); 
        } else if (e.target.innerText === 'Portuguese') {
            changeLanguage('pt'); 
        }
        setClick(false);
    };

    return (
        <>
            <section className='drop-section'>
                <ul onClick={handleClick} className={click ? 'drop-menu' : 'dropdown-menu'}>
                    {MenuItems.map((item, index) => {
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