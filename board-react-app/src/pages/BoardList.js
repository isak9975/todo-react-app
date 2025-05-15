//main 화면
import { CustomButton } from "../component/CustomButton"
import { mockData } from "../component/mockData"
import '../css/BoardList.css'
import { useState,useContext,useEffect } from "react"
import { BoardContext } from "../context/BoardContext";
import { Link, Navigate, replace, useNavigate } from "react-router-dom";

export const BoardList = () => {

    const {boardList,setBoardList} = useContext(BoardContext);

    const [currentPage,setCurrentPage] = useState(1); //현재 페이지
    const [postsPerPage,setPostPerPage] = useState(3); //한 페이지 보여줄 게시물 개수
    const [totalPages, setTotalPages] = useState(1); //총 페이지 수

    const navigate = useNavigate();

    useEffect(()=>{
        //백엔드와 통신하는 척 boardList에 가짜데이터를 넣는다.
        // setBoardList(mockData);
        //게시판의 총 페이지 수
        setTotalPages(Math.ceil(boardList.length/postsPerPage));
        //게시글 개수와, 총 페이지 수가 변할 때마다 재 렌더링
        setCurrentPage(1);
    },[postsPerPage,boardList.length])


    //페이지 계산
    //현재 페이지의 마지막 게시글 인덱스 +1을 구한다.
        //ex) 현재페이지 : 2, 한페이지에 보여줄 게시글 3
    const indexOfLastPost = currentPage * postsPerPage;

    //현재 페이지의 첫번째 게시물의 인덱스
        //ex) 6-3 = 3
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    //indexOfFirstPostt 부터 indexOfLastPost 미만까지 잘라낸다.
    const cuurentPosts = boardList.slice(indexOfFirstPost,indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //보여줄 게시물 수 조정하는 함수
    const handelPostsPerPage = (e) => {
        setPostPerPage(e.target.value);
        setCurrentPage(1); //1페이지로 돌아간다.
    }

    const handleWritePost = ()=>{
        return navigate('/write')
        // return window.location.href='/write'
    }

    return(
        <div className="board-container" style={{textAlign:"center", display:"flex",flexDirection:"column", width:"90vh", border:"1px solid black"}}>
            
            <h1 className="board-title">게시판</h1>

<div style={{display:"flex", justifyContent:"space-between"}}>
             <div className="board-posts-per-page">
                {/* 게시물 수 선택 드롭다운 */}
                <label>게시물 수: {" "} 
                    <select value={postsPerPage} onChange={handelPostsPerPage}>
                        <option value='3'>3개</option>
                        <option value='5'>5개</option>
                        <option value='10'>10개</option>
                    </select>
                </label>
            </div>
            
            <div className="board-button">
                <CustomButton onClick={handleWritePost} label='글쓰기'/>
                {/* <button onClick={handleWritePost}>글쓰기</button> */}
            </div>
</div>

            <br></br>

            <div> 
                <ul className='board-posts'>
                {/* 보여주기 */}
                        {cuurentPosts.map((board)=>(
                            <li style={{cursor:"pointer"}} 

                            onClick={()=>{window.location.href=`/post/${board.id}`}} 
                            key={board.id} className="board-post-item">

                                <Link to={`/post/${board.id}`}>{board.title}</Link>    

                                <span>작성자 : {board.author}</span>

                                <span>|작성 시간 : {board.writingTime}</span>

                            </li>
                        ))}
                </ul>
            </div>


           

            {/* 이동할 페이징 처리 */}
            <div className="board-pagination">
                {/* ... : 펼치기 */}
                {/*1.  Array(totalPages) : 전체 페이지만큼 방을 가지는 배열 생성.*/}
                {/*2.  .keys() : 0 부터 totalPages-1 까지 인덱스 이터레이터가 생성된다. */}
                {/*3. ...으로 펼쳐서 [0,1,2,3,...totalPages-1] 형태의 배열을 얻는다. */}
                {/*4. map((number)=>...) 각 number에 대해 버튼을 생성한다. */}
                {[...Array(totalPages).keys()].map((number)=>(
                    <button
                        key={number+1}
                        //선택된것만 css를 주기 위함.
                        className={currentPage===number+1?"selected":""}
                        onClick={()=>{paginate(number+1)}}
                        >
                            {number+1}
                        </button>
                ))}
            </div>
        </div>
    )
}