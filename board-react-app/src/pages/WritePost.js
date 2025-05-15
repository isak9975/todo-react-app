import { useContext,useState } from "react";
import { BoardContext } from "../context/BoardContext";
import { CustomButton } from "../component/CustomButton";
import { CustomInput } from "../component/CustomInput";
import { useNavigate } from "react-router-dom";

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
            {id:boardList.length+1,
            title:title,
            author:author,
            context:context,
            writingTime : new Date().toISOString()
        }

        setBoardList([...boardList,board]);

        console.log(board)
        console.log(boardList)

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
                <CustomInput onChange={(e)=>{setTitle(e.target.value)}} value={title} name="title" placeholder="제목"/>
                <CustomInput onChange={(e)=>{setAuthor(e.target.value)}} value={author} name="author" placeholder="작성자"/>
                <CustomInput multiline rows={6} onChange={(e)=>{setContext(e.target.value)}} value={context} name="context" placeholder="내용"/>
            <div style={{display:"flex"}}>
                <CustomButton label="저장" onClick={writeBoard}/>
                <CustomButton label="취소" onClick={()=>{ window.location.href='/write'}} variant="outlined" color="secondary"/>
                <CustomButton label="홈" onClick={()=>{ window.location.href='/'}}  color="secondary"/>
            </div>
        </div>
    )
}