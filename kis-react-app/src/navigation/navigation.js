import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/context"

export const NavBar=()=>{

    const{theme} = useContext(ThemeContext)

    return(
        <div className={theme==='light'?"navbar light":"navbar dark"}>
            <Link to={'/src/pages/home.js'}>Home</Link> / 
            <Link to={'/src/pages/posts.js'}>Posts</Link> / 
            <Link to={'/src/pages/settings.js '}>Settings</Link>
        </div>
    )
}