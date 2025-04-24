import {useState,useEffect} from 'react'

export const FetchExam = () => {
    const [posts,setPosts] = useState([]);//데이터를 저장할 상태
    const [lodaing,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{      
        //useEffect 안에 비동기 함수를 작성.
    setTimeout(()=>{//너무 찰나의 순간에 로딩 되어서 일부러 시간 대기시간 줘버리기.
        const fetchData = async () => {
            // try {
                // const response = await fetch('https://jsonplaceholder.typicode.com/posts')

            //     //통신이 잘 됐는지 안됐는지의 결과에 따라서 처리
            //     if(!response.ok){
            //         throw new Error('데이터를 불러오는데 실패했습니다.')
            //     };
            //     //100개의 게시물 데이터가 data로 들어가게 된다.
            //     const data = await response.json();
            //     setPosts(data); //상태를 데이터에 저장
                    
            // } catch (error) {
            //     setError(error.message)//에러 처리
            //     console.log(error)
            // } finally{
            //     setLoading(false); //로딩 상태를 완료로 설정
            // }
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response=>{
                    if(!response){
                        throw new Error("데이터를 불러오는데 실패했습니다")
                    }
                    return response.json();
                })
                .then(data=>setPosts(data))
                .catch(error=>setError(error))
                .finally(setLoading(false))

        }    
        fetchData();
    },2000)
    },[])
    
    
    //로딩 중일때 보여줄 내용
    if(lodaing){
        return <div>로딩중.....</div>
    }

    //에러 발생 시 보여줄 내용
    if(error){
        return <div>에러발생 : {error}</div>
    }

    
    //데이터를 성공적으로 불러왔을 때 보여줄 내용
    return(
        <div>
            <h1>게시글 내용</h1>
            <ul>
                {posts.slice(0,10).map((post)=>(
                    <li key={post.id}>{post.userId}-{post.title}</li>
                ))}
            </ul>
        </div>
    )
}