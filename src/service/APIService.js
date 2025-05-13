import axios from 'axios'
import { API_BASE_URL } from '../api-config'



//요청하는 메서드를 만들것이다.
    //api : 호출할 API의 경로
    //method : HTTP메서드(GET,POST,PUT,DELETE)
    //request : 요청에 담을 데이터(주로 POST, PUT에서 사용)

    //headers는 객체로 이루어져있으니 객체로만들기.
    // let headers = new Headers({
    //     "Content-Type":"application/json"
    // })

    // //로컬스토리지에 저장된 ACCESS_TOKEN 가져오기
    // const accessToken = localStorage.getItem("ACCESS_TOKEN");

    // //만약 토큰이 있고, 토큰의 내용물이 비어있지 않으면 
    // if(accessToken && accessToken !== null){
    //     headers.append("Authorization","Bearer "+accessToken);
    // }

    //Content-Type : application/json
    //Authorization : Bearer 토큰값

//=================================================================================
//axios 리팩토링을 이용한 통신
    //1. axios 객체를 생성
    //바뀌지않는 콩동적인 기본설정
    //create() : axios가 제공하는 팩토리 함수
    //팩토리 패턴 : 여러곳에서 api의 호출이 필요할 때, 매번 같은 설정을 반복하지 않고
    //한번에 설정을 정의하는 방식.
    const apiClient = axios.create({
        baseURL: API_BASE_URL,
        headers : {
            'Content-Type':'application/json'
        }
    })

    //인터셉터 : 요청 전/후에 공통 로직을 삽입할 수 있는 로직으로, 인증 토큰 첨부랑 
    //에러 일관처리에 핵심적으로 사용된다.

    //2. 요청 인터셉터로 토큰 자동 첨부
    //interceptors.request.user(onFulfilled, onRejected) : 역할이 서버로 전송되기 전에 
    //호출될 콜백 함수를 등록한다.
    apiClient.interceptors.request.use(config=>{
        const token = localStorage.getItem("ACCESS_TOKEN")
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    })

    //3. 응답 인터셉터로 403 처리
    //apiClient.interceptors.response.use(onFulfilled,onRejected) : 서버로부터 응답을
    //받은 직후에 호출도리 콜백을 등록한다.

    // ?.(옵셔널체이닝) : null이나 undefined가 있을 수 있는 객체의 프로퍼티로 접근할 때, 
    // 에러를 방지하고 안전하게 값을 조회하거나 호출할 수 있게 해준다.
    //null 또는 undefined일 경우 즉시 undefined를 반환하고 그 뒤 연산은 생략한다.
    apiClient.interceptors.response.use(response =>response,
        error => {
            //?. 뒤에 값이 null이거나 undefined면 undefined를 넣어주는 => error를 발생시키지 않는.
            //장점 : if문을 안써도됨. 짧게 쓸수 있음.
            const status = error.response?.status
            if(status === 403){
                // window.location.href='/login'
            }
            //이 에러가 다음 catch 블록이나 호출 측으로 전달되도록 한다.
            return Promise.reject(error);
        }
    )
    
//========================================================================

export function call(api,method,request){

    //앞서 설정한 options 객체를 사용하여 axios로  HTTP요청을 보낸다.
    return apiClient({
        url : api,
        method,
        data : request || undefined,
    })
    .then (res => res.data);
}

// export function call(api,method,request){

    // //기본 옵션 설정
    // let options = {
    //     url :  API_BASE_URL + api,
    //     method : method,
    //     headers : headers
    // }

    // //false, 0, null, undefined,NaN, 빈문자열 -> false로 취급.
    // if(request){ //만약 request = data가 있다면.
    //     //JSON.stringify() : 객체를 JSON문자열로 변환.
    //     options.data = JSON.stringify(request);
    //     //자바스크립트는 없는 키(지금의 data)는 추가해준다.
    // }

    // //앞서 설정한 options 객체를 사용하여 axios로 HTTP요청을 보낸다.
    // //call 메서드의 호출 결과는 결국 Promise이기 때문에 .then을 이어서 쓸 수 있다.
    
//     return axios(options)
//         //요청이 성공적으로 처리된 경우 실행되는 코드이다.
//         .then(response => {
//             console.log(response.data)
//             return response.data;
//         })
//         .catch(error =>{
//             if(error.status === 403){ //403 => 권한없음.
//                 console.log("에러코드 : ",error.status);
//                 //403코드면 로그인 path로 가라
//                 //window.location.href 해당 url로 이동시키기.
//                 window.location.href="/login";
//             }
            
//             const m_error = error;
//             return m_error;
//         })

// }

//로그인 함수
//userDTO 매개변수에 담긴 내용
//{username : username, password: password}
export function signin(userDTO){
    return call("/auth/signin","POST",userDTO)
            .then(response=>{
                console.log("response : " + response);
                // alert("로그인 토큰 : " + response.token);
                if(response.token){
                    //로컬스토리지에 토큰좀 저장해줘
                    localStorage.setItem("ACCESS_TOKEN",response.token);
                    //todo 화면으로 리다이렉트
                    window.location.href="/";
                }else{
                    //토큰이 비어있는 경우 로그인화면으로 리다이렉트
                    window.location.href="/login";
                }
            })
}


//로그아웃 함수.
export function signout(){
    //로컬스토리지에 있는 토큰을 없앤다.
    localStorage.setItem("ACCESSTOKEN",null);
    window.location.href="/login";
}

//계정 생성
export function signup(userDTO){
    return call("/auth/signup","POST",userDTO);
    window.location.href="/login";
}