
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
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

apiClient.interceptors.response.use(response=>response
    ,error =>{
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