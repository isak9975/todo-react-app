import { useContext } from "react"
import { ThemeContext } from "../context/context";

export const Hello=()=>{
    const {theme} = useContext(ThemeContext);

    return(
        <div>
            <h2>Welcome to MY React DashBoard!</h2>
            <h2>Current Theme : {theme}</h2>
        </div>
    )
}