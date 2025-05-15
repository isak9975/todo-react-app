
import axios from 'axios'

const apiClient = axios.create({
    baseURL : 'http://localhost:10000',
    headers : {
        'Content-Type':'application/json'
    }
})

apiClient.interceptors.request.use(config=>{
    const token = localStorage.getItem("ACCESS_TOKEN")
    if(token){
        //백엔드에서 토큰의 값을 Authoriztion을 앞에서 7자리 때고 확인하기 때문에 
        //토큰앞의 7자리를 확보해야함.(Bearer token)
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

apiClient.interceptors.response.use(response=>response
    ,error =>{
    //옵셔널 체이닝(?.)
    //뒤의 값이 null 또는 undefined일 경우 undefined로 설정한다.
    //null로 인한 오류 방지용.

    const status = error.response?.status
    if(status === 403){
        window.location.href='/login'
    }
    return Promise.reject(error);
})

export const P_info = (api,method,request) =>{

    return apiClient({
        url:api,
        method,
        data:request||undefined,
    })
    .then (res => res.data);

}

//========================================================================