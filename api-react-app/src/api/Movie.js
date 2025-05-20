import axios from 'axios'
import { useEffect, useState } from 'react'

export const Movie = () => {

    const [targetData,setTargetDate] = useState('');
    const [movie,setMovie] = useState([]);
    const [loading,setLoading] = useState(true);

    const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
    const secret = '96302c420ee3ebad8e5c51a161100db1'

    useEffect(()=>{
        request()
    },[loading])

    const request = async() => {

        const response = await axios.get(url,{
            params : {
                key : secret,
                targetDt : 20240520,
            }
        })
        .catch(error=>console.log(error))
        .finally(setLoading(false))

        console.log(response.data.boxOfficeResult.dailyBoxOfficeList)
        setMovie(response.data.boxOfficeResult.dailyBoxOfficeList)

        console.log(movie)
        
    }

    if(loading){
        return(<p>로딩중...</p>)
    }else{    

    //일별 박스오피스 순위, 영화제목, 영화 개봉일, 해당일의 매출액
    return(
        <div>
            <h2>영화 api 사용해보기</h2>
                <input 
                    type='text'
                    value={targetData}
                    onChange={(e)=>{
                        setTargetDate(e.target.value)
                    }}
                    placeholder='날짜를 입력해주세요'
                    // defaultValue={20240520}
                    readOnly/>
                <button onClick={request}>조회하기</button>
                <hr/>    

            <ul>
            {movie.map((movies,index)=>
                        <li key={index}>
                        <p>순위 : {movies.rank} </p>
                        <p color='red'>영화 이름 : {movies.movieNm}</p>
                        <p>개봉일 : {movies.openDt}</p>
                        <p>해당일의 매출 : {movies.salesAmt}</p>
                        </li>
            )}
            </ul>




        </div>
        

    )
}
}