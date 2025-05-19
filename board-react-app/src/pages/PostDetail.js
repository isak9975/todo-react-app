import { useContext, useEffect, useState } from "react";
import { BoardContext } from "../context/BoardContext";
import { useParams,useNavigate } from "react-router-dom";
import { CustomButton } from "../component/CustomButton";
import axios, { Axios } from "axios";

export const PostDetail = () => {

//게시글을 사용하기 위해 BoardContext 사용
const {boardList,setBoardList} = useContext(BoardContext);

//하나의 게시글을 담기 위한 state
const [item,setItem] = useState({});

//넘어온 아이디를 받아야 한다.
const id = useParams();

const navigate = useNavigate();

//강사님 코드
// const getBoard = async () => {
//     const response = await axios({
//         url:`http://localhost:10000/api/board/${id.id}`,
//         method:"GET"
//     });
//     setItem(response.data.data)
//     console.log(response.data.data);
// }

//id를 통해 boardList에 들어있는 게시글 한건을 꺼내서 화면에 출력하기
//useEffect() 사용하기

useEffect(()=>{


  axios.get(`http://localhost:10000/api/board/${id.id}`)
    .then(res=>{
        // console.log(res.data.data[0])
        setItem(res.data.data[0])
    })
    .catch(error=>console.error(error))

  //게시글 배열에서, 넘어온 id와 일치하는 게시글을 한 건 찾아서 변수에 담는다.
//   const post = boardList.find((it)=>it.id === parseInt(id.id));
 
    // console.log(post)

//   if(post){
//     setItem(post)
//   }else{
//     alert("id를 찾을 수 없습니다")
//   }

//   setItem(boardList[id.id-1])

},[])


const moveToEdit = () => {
    navigate(`/edit/${id.id}`)
}

//게시글 삭제하기
const handleDelete = () => {
    //백엔드에 삭제를 요청
    //응답으로 true또는 false를 받아오기
    //true일 때 삭제 되었습니다 alert 띄우기

    if(window.confirm("게시글을 삭제하시겠습니까?")){

        axios.delete('http://localhost:10000/api/board/'+id.id)
            .then(res => {
                if(res.data){
                    alert(`${id.id}번 게시물 삭제 성공`)
                    navigate("/")
                }else{
                    alert(`${id.id}번 게시물 삭제 실패`)
                }
            })
        }

    // console.log(boardList[id.id-1].id===parseInt(id.id))
    // console.log(boardList.filter((board)=>board.id!==parseInt(id.id)))
    // setBoardList(boardList.filter((board)=>board.id!==parseInt(id.id)))   

}


const moveToBoard = () => {
    navigate("/")
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