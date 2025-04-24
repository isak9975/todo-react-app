import { useState,useEffect} from "react"
import axios from 'axios'

//블로그 프로그램 만들기
//1. 게시물 리스트를 불러오는 기능
//2. 게시물 추가 기능
//3. 게시물 삭제 기능

//제목과 내용을 입력할 수 있는 입력필드 2개와 옆에 추가버튼
//입력 필드 밑에는 게시물 리스트를 출력.
//각각의 게시물은 삭제버튼이 옆에 있어야함.

export const BlogApp = () =>{
    const[posts,setPosts] = useState([]);
    const[load,setLoad] = useState(true);
    const[error,setError] = useState(null);
    const[newPost,setNewPost] = useState([]);

    //게시물 리스트 가져오기
    useEffect(()=>{
        const fetchPosts = () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(r=>{
                    setPosts(r.data)
                    console.log(r.data)
                })
                .catch(e=>setError(e.message))
                .finally(()=>{
                    setLoad(false);
                })
        }
        fetchPosts()
    },[])



    //게시물추가
    //jsonPlaceholder에 추가를 요청한다과 해서 진짜 추가되는건 아님
    //state에 새 게시물을 추가하기
    const addPost = async () => {
        //post : 우리가 추가한 1건을 반환한다.
        axios.post('https://jsonplaceholder.typicode.com/posts',newPost)
            .then((response)=>{
                setPosts([response.data,...posts])
                setNewPost({title:'',body:''}) //초기화
            })
            .catch(e=>setError(e.message))
            .finally(setLoad(false))
    }

    
    //게시글삭제
    //필터링해서 다시 렌더링하기
    const deletePost = (id) => {
        console.log('deletepost Run!')
        //delete : 삭제시에서는 아무 값도 반환하지 않는다.
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setPosts(posts.filter(post=>post.id !== id));  
        console.log(posts.filter(post=>post.id !== id))  
             
    }


    if(load) return <div>로딩중...</div>
    if(error) return <div>{error}</div>

    return(
        <div>
            <h1>블로그 게시물</h1>
            <h2>새 게시물 추가</h2>
            <input
                type="text"
                placeholder="제목"
                value={newPost.title}
                onChange={(e)=>setNewPost({...newPost,title:e.target.value})}
                />
            <input
                type="text"
                placeholder="내용"
                value={newPost.body}
                onChange={(e)=>setNewPost({...newPost,body:e.target.value})}
                />
            <button type="button" onClick={addPost}>게시글 추가</button>
            {/* 게시물 리스트 */}
            <br/><br/>
            <br/><br/>
            <div>
                <h2>게시물 리스트</h2>
                {posts.map(post=>(
                    <div style={{border:"1px solid black", margin:"10px",padding:"10px"}} key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button id={post.id} type="button" onClick={(e)=>{
                            deletePost(Number(e.target.id))
                        }}>삭제</button>
                        </div>

                ))}
            </div>
        </div>
    )
}