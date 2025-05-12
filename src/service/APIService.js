import axios from 'axios'
import { API_BASE_URL } from '../api-config'

//요청하는 메서드를 만들것이다.
    //api : 호출할 API의 경로
    //method : HTTP메서드(GET,POST,PUT,DELETE)
    //request : 요청에 담을 데이터(주로 POST, PUT에서 사용)
export function call(api,method,request){
    //기본 옵션 설정
    let options = {
        url :  API_BASE_URL + api,
        method : method,
        headers : {"Content-Type":"application/json"}
    }

    //false, 0, null, undefined,NaN, 빈문자열 -> false로 취급.
    if(request){ //만약 request = data가 있다면.
        //JSON.stringify() : 객체를 JSON문자열로 변환.
        options.data = JSON.stringify(request);
        //자바스크립트는 없는 키(지금의 data)는 추가해준다.
    }

    //앞서 설정한 options 객체를 사용하여 axios로 HTTP요청을 보낸다.
    //call 메서드의 호출 결과는 결국 Promise이기 때문에 .then을 이어서 쓸 수 있다.
    
    return axios(options)
        //요청이 성공적으로 처리된 경우 실행되는 코드이다.
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(error =>{
            if(error.status === 403){
                console.log("에러코드 : ",error.status);
                //403코드면 로그인 path로 가라
                window.location.href="/login";
            }
            
            const m_error = error;
            return m_error;
        })

}

export function signin(userDTO){
    return call("/auth/signin","POST",userDTO)
            .then(response=>{
                console.log("response : " + response);
                alert("로그인 토큰 : " + response.token);
            })
}

