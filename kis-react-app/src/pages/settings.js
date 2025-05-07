import { useContext } from "react"
import { ThemeContext } from "../context/context"

export const Settings = () => {
    const {theme,toggleTheme} = useContext(ThemeContext)

    return(
        <div>
            <h2>Crruent Theme : {theme}</h2>
            <button type="button" onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}