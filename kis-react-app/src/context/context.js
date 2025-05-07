import {useState,createContext,Provider} from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme,setTheme] = useState('light');

    const toggleTheme = () => {
        if(theme==='light'){
            setTheme('dark')
        }else(
            setTheme('light')
        )
    }

    return(
        <ThemeContext value={{theme,toggleTheme}}>
            {children}
        </ThemeContext>
    )
}
