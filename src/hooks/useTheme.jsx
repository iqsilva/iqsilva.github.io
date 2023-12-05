import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export const useTheme = () => {
    const val = useContext(ThemeContext);
    if(val === undefined) throw new Error("Context is undefined")
    return val;
};