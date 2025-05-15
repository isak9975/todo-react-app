import { useContext, useEffect, useState } from "react";
import { BoardContext } from "../context/BoardContext";
import { useParams,useNavigate } from "react-router-dom";
import { CustomButton } from "../component/CustomButton";

export const PostDetail = () => {

const {boardList,setBoardList} = useContext(BoardContext);

const [item,setItem] = useState({});

const id = useParams("id");

//id를 통해 boardList에 들어있는 게시글 한건을 꺼내서 화면에 출력하기
//useEffect() 사용하기

useEffect(()=>{

  setItem(boardList[id.id-1])

},[])

console.log(id.id)
console.log(item)

const moveToEdit = () => {

}

const handleDelete = () => {

    console.log(boardList[id.id-1].id===parseInt(id.id))
console.log(boardList.filter(boardList[id.id-1].id===parseInt(id.id)))
    // setBoardList(boardList.filter(!boardList[id.id-1].id===parseInt(id.id)))

    alert(`${id.id}번 게시물 삭제 성공`)

    // window.location.href="/"

}


const moveToBoard = () => {
    window.location.href='/'
}


    return(
        <div>
            <h2 className="board-detail-title">{item.title}</h2>
            <div className="board-detail-info">
                <h5>작성자 : {item.author}</h5>
                <p style={{fontSize:"12px",color:"gray"}}>{item.writingTime}</p>
            </div>
            <hr/>
                <p className="board-detail-body">{item.content}</p>
            <hr/>
            <div style={{display:"flex",justifyContent:"center"}}>
                <CustomButton label="수정" onClick={moveToEdit}/>
                <CustomButton label='삭제' color="secondary" onClick={handleDelete}/>
                <CustomButton label='목록으로' variant="outlined" onClick={moveToBoard}/>
            </div>
        </div>
    )
}