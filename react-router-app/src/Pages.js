import { Link, Navigate, Outlet } from "react-router-dom"
import { useParams } from "react-router-dom"

const Home = () => {
    const users = [{id:1,name:'홍길동'},
                    {id:2,name:'유재석'},
                    {id:3,name:'강호동'}]
    
    //위 배열에 있는 내용을     
    return(
        <div>
            <h2>홈 페이지</h2>
            <p>환영합니다</p>
            <ul>
                {users.map(user=>(
                    <li key = {user.id}>
                        <Link to={`/users/${user.id}`}>
                            {user.name}님의 프로필 보기
                        </Link>
                    </li> 
                ))}
            </ul>        
            </div>
    )

}

const About = () =>{
    return(
        <div>
            <h2>소개 페이지</h2>
            <p>React Router 실습 예제입니다.</p>
        </div>
    )
}

const PostDetail = () =>{
    const {postId} = useParams();
    return(
        <div>
            <h2>게시글 상세 페이지</h2>
            <p>게시글 ID : {postId}</p>
        </div>
    )
}

const UserProfile = ()=> {
    //주소창에 있는 값을 useParams을 사용해 id에 담는다
    //http://localhost:3000/users/1 => id=1
    const {id} = useParams();

    //실제로는 id를 사용하여 서버에서 데이터를 가져오기만
    //연결이 안되어 있으니 목업데이터를 사용해보자
    const user = {
        id,name : id === '1' ?'홍길동' : id === '2'?'박길동':'김개똥',
        age : id === '1' ? 30 : id ==='2' ? 45 : 38
    }

    return(
        <div>
            <h2>{user.name}님의 프로필</h2>
            <p>사용자 ID : {user.id}</p>
            <p>나이 : {user.age}</p> 
        </div>
    )
}

//중첩라우팅 컴포넌트
const Dashboard = () =>{
    return(
        <div>
            <h1>대시보드</h1>
            <nav>
                <ul>
                    {/* /dashboard를 기준으로 /dashboard/overview로 이동하게 한다. */}
                    <li>
                        <Link to="overview">개요</Link>
                    </li>
                    <li>
                        <Link to="settings">설정</Link>
                    </li>
                </ul>
            </nav>

            {/* 자식 라우트 컴포넌트가 렌더링될 자리를 지정하는 컴포넌트 */}
            {/* 자식 컴포넌트 Overview, Settings가 여기서 켜짐 */}
           <Outlet/>


        </div>
    )
}

const Overview = () =>{
    return <h2>대시보드 개요 페이지</h2>
}

const Settings = () => {
    return <h2>대시보드 설정 페이지</h2>
}


const NotFound = () =>{
    return(
        //잘못된 주소를 입력했을 때 홈 컴포넌트로 이동.
        <Navigate to="/" />
    )
}

const Login = () => {
    return <h2>로그인 페이지</h2>
}

const PrivateRoute = ({element,isAuthenticated}) =>{
    return isAuthenticated ? element : <Navigate to='/login' />
}


export {Home,About,PostDetail,UserProfile,Dashboard,Overview,Settings,NotFound,Login,PrivateRoute}