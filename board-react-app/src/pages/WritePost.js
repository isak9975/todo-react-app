import { useContext,useState } from "react";
import { BoardContext } from "../context/BoardContext";
import { CustomButton } from "../component/CustomButton";
import { CustomInput } from "../component/CustomInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const WritePost = () => {
    const {boardList,setBoardList} = useContext(BoardContext);

    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [context,setContext] = useState("");

    const navigate = useNavigate();

    const writeBoard = () => {
        // 폼 사용할때
        // e.preventDefault();

        const board = 
            {
            title:title,
            author:author,
            content:context,
        }

        axios.post("http://localhost:10000/api/board",board)
        .catch(error=>console.log(error))

        // setBoardList([...boardList,board]);

        alert('게시물이 등록되었습니다')
        navigate('/')
    }

    const backToBoard = () => {
        navigate("/")
    }


    return(
        <div>
            <h1>글쓰기</h1>
            {/* id, writingTimg, 하나의 게시글이 객체 */}
            {/* 시간 new Data().tolSOString() */}
            {/* id : 16부터 */}
                <CustomInput label={"제목"} onChange={(e)=>{setTitle(e.target.value)}} value={title} name="title" placeholder="제목"/>
                <CustomInput label={"작성자"} onChange={(e)=>{setAuthor(e.target.value)}} value={author} name="author" placeholder="작성자"/>
                <CustomInput label={"내용"} multiline rows={6} onChange={(e)=>{setContext(e.target.value)}} value={context} name="context" placeholder="내용"/>
            <div style={{display:"flex"}}>
                <CustomButton label="저장" onClick={writeBoard}/>
                <CustomButton label="취소" onClick={()=>{ navigate('/write')}} variant="outlined" color="secondary"/>
                <CustomButton label="홈" onClick={backToBoard}  color="secondary"/>
            </div>
        </div>
    )
}