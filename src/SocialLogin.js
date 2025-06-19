import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const SocialLogin = (props) => {
    const getUrlParameter = (name)=>{
        let search = window.location.search; //주소에서 ?뒤에 있는 쿼리스트링을 추출
        let params = new  URLSearchParams(search) //파라미터를 추출 -> Map형태로 저장이된다.
        return params.get(name) //해당 이름의 파라미터 값을 반환
    }

    useEffect(()=>{
        const token = getUrlParameter("token");

        if(token){
        console.log("로컬스토리지에 토큰 저장"+token)
        localStorage.setItem("ACCESS_TOKEN",token)
        return(
            window.location.replace("/")
            //토큰이 있다면 홈으로 이동.
        )
    }else{//토큰이 없는 경우
        return(
            window.location.replace("/login")
        )
    }
    },[])

    return <div>로그인 처리 중입니다...</div>

}