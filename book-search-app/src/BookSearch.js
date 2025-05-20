import axios from 'axios'
import { useState,useEffect } from "react";


export function BookSearch(){

    const [books,setBooks] = useState([]); //검색 결과로 얻은 책 목록
    const [loading,setLoading] = useState(false); //로딩 상태
    const [error, setError] = useState(null); //에러 상태
    const [query,setQuery] = useState("") //검색어


    const handleSearch = (e) => {
        e.preventDefault();
        searchBook();
    }

    const searchBook = async() => {
        

        setLoading(true);
        setError(null);
        
        const clientId = ''
        const clientSecret = ''

        try {
            console.log("run")
            const response = await axios.get(
               `http://localhost:10000/api/books`,{
                params:{
                    query:query,
                }
            }
        )
            setBooks(response.data.items);
        } catch (error) {
            console.log(error)
            setError("도서 검색에 실패 했습니다")
        }finally{
            setLoading(false);
        }

    }
    
    return(
        <div>
            <h1> 네이버 도서 검색</h1>
            <form onSubmit={handleSearch}>
                <input  type="text"
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        placeholder="책 이름을 입력하세요"/>
                <input type="submit" value="검색"/>
            </form>

            <ul>
                {books.map((book)=>(
                    <li key={book.isbn}>
                        <img src={book.image} alt={book.title}/>
                        <p>제목 : {book.title}</p>  
                        <p>저자 : {book.author}</p>  
                        <p>출판사 : {book.publisher}</p>  
                        <p>가격 : {book.discount ? `${book.discount}원` : `가격정보 없음`}</p>  
                        <a href={book.link}>더보기</a>
                        </li>
                ))}
            </ul>
        </div>
    )
}

