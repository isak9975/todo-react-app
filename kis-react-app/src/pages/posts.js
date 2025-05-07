import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context/context"


export const Posts = () => {
    const {theme} = useContext(ThemeContext)

    const [post,setPost] = useState([]);
    const [load,setLoad] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {setPost(data)})
            .catch(e => setError(e))
            .finally(setLoad(false))

    },[])

    console.log(post)
    



    return(
        <div>
            {/* {{load}?<h2>Loading posts...</h2>:<h2>Loadidfzts...</h2>} */}
            <h1>post</h1>
            <ul>
                {post.map(posts=>
                    <li key={posts.id}>{posts.title}</li>
                )}
            </ul>
        </div>
    )
}