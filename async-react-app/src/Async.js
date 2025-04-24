import { useEffect, useState } from "react"
import axios from "axios"

export const Fetch = () => {
    const [datas,setDatas] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json()) //json 형식으로 응답을 반환
            .then(data => {console.log(data);setDatas(data);})//데이터의 출력
            .catch(error => console.log(error))//에러 처리
    },[])
    return(
        <div>
            <ul>
                {datas.map((data)=>(
                    <li key={data.id}><b>{data.userId} - {data.id} - </b><small>{data.title} {data.body}</small></li>
                ))}
            </ul>
        </div>
    )
}


export const Axios = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}