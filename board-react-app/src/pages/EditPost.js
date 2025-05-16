import { useContext,useEffect,useState } from "react";
import { BoardContext } from "../context/BoardContext";
import { CustomButton } from "../component/CustomButton";
import { CustomInput } from "../component/CustomInput";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const EditPost = () => {
    const {boardList,setBoardList} = useContext(BoardContext);

    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [content,setContent] = useState("");

    const [item,setItem] = useState("");

    const id = useParams();

    const navigate = useNavigate();

    const [post,setPost] = useState({});
    // const {title1,author1,content1} = post;

    const apiConect = async(e) =>{
        const response = await axios.get("http://localhost:10000/api/board")
        console.log(response.data.data.find(board=>board.id===parseInt(id.id)))
        setPost(response.data.data.find(board=>board.id===parseInt(id.id)))
        console.log(post)

        setTitle(post.title)
        
        setAuthor(post.author)
        console.log(author)
        setContent(post.content)
        console.log(content)
    }

    useEffect(()=>{
        // 1. 게시글을 가져와서 출력하기(상세보기 처럼.)
        // const currentPost = boardList.find((item)=>item.id===parseInt(id))
        // if(currentPost){
        //     setPost(currentPost)
        // }else{
        //     console.error('게시글을 찾을 수 없습니다')
        // }
        // axios.get("http://localhost:10000/api/board")
        //     .then(res=>{
        //         setPost(res.data.data.find(board=>board.id===parseInt(id.id)))
        //         console.log(res.data.data.find(board=>board.id===parseInt(id.id)))
        //         console.log(post.title)
        //         console.log(post.author)
        //         console.log(post.content)
        //     })
        apiConect();
        // const post = boardList.filter(board=>board.id===parseInt(id.id))[0]

        // setTitle(post.title)
        // console.log(title)
        // setAuthor(post.author)
        // console.log(author)
        // setContent(post.content)
        // console.log(content)

    },[])

                    // boardList.filter(board=>board.id===id.id)
                    // console.log(boardList[id.id-1])
                    // console.log(id.id)
                    // console.log(boardList[id.id-1].id===parseInt(id.id))
    const onChange = (e) => {
        const {value,name} = e.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]:value,
        }))
    }

    const updateBoard = () => {
        //강사님 코드
        // setBoardList((prevList)=>prevList.map((item)=>item.id===parseInt(id)?{...item,...post}:item))
        // alert('게시물이 수정되었습니다')
        // navigate("/post/"+id)

        // 2. 수정한 게시글을 게시글 목록에 반영하기
        const writingTime = new Date().toISOString()

        axios.put(`http://localhost:10000/api/board/${id.id}/post`,{title,author,content,writingTime})
        .catch(error=>console.log(error))

        alert('게시물이 수정 되었습니다')

        navigate("/post/"+id.id)
    }

    const backToBoard = () => {
        navigate("/")
    }


    return(
        <div>
            <h1>{`${id.id}`}번 게시글 수정하기</h1>
            {/* id, writingTimg, 하나의 게시글이 객체 */}
            {/* 시간 new Data().tolSOString() */}
            {/* id : 16부터 */}
                <CustomInput label={"제목"} onChange={(e)=>{setTitle(e.target.value)}} value={title} name="title" />
                <CustomInput label={"작성자"} onChange={(e)=>{setAuthor(e.target.value)}} value={author} name="author"/>
                <CustomInput label={"내용"} multiline rows={6} onChange={(e)=>{setContent(e.target.value)}} value={content} name="content"/>
            <div style={{display:"flex"}}>
                <CustomButton label="수정완료" onClick={updateBoard}/>
                <CustomButton label="리셋" onClick={()=>{ navigate(`'./edit/:${id.id}'`)}} variant="outlined" color="secondary"/>
                <CustomButton label="홈" onClick={backToBoard}  color="secondary"/>
            </div>
        </div>
    )
}