import { useState,useEffect } from "react"
//fetch를 사용하여, 외부 api에서 데이터를 가져와 화면에 렌더링하는
//프로그램 만들기

//외부 api를 호출하여 데이터를 가져욘다 (https://jsonplaceholder.typicode.com/users)
//데이터를 가져오는 동안 로딩 상태를 표시한다.
//api 요청 실패 시, 에러 메세지를 표시해야한다.
//가져온 데이터를 화면에 목록 형태로 출력한다.
//사용자의 이름과 이메일 주소를 출력해주세요

export const UserList = () => {
    const [user,setUser] = useState([]);
    const [load,setLoad] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {

                if(!response.ok){
                    throw new Error("데이터 로딩을 실패하였습니다")
                }
                console.log('로딩 실행')
                return response.json()
            })
            .then(data => {setUser(data);console.log(data)})
            .catch(error => console.log(error))
            .finally(setLoad(false))
        },2000)
            
    },[])

    if(load){
        return <div>로딩중......</div>
    }

    if(error){
        return <div>에러에러에러에러{error}</div>
    }
    
    return(
        <div style={{textAlign:"left"}}>
            <ul>
                {user.map((us)=>(
                    <li key={us.id}><b>name</b> = <small>{us.username} {us.name}</small>
                    <br/><small><b>email</b> = {us.email}</small></li>
                ))}
            </ul>
        </div>
    )
}