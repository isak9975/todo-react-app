import { Link } from "react-router-dom";
//Link 컴포넌트
//사용자가 클릭할 때 해당 경로로 이동시키는 링크를 생성한다.

//주요속성
//to : 이동할 경로를 문자열 또는 객체로 지정한다
//replace : 뒤로가기 시 이전 URL이 남지 않는다.
//state : 이동 시 함께 전달할 상태를 지정한다.

const Navbar = () => {

    return(
        <div>
            {/* a태그의 역활을 하는 태그 */}
            <Link to="/">로고</Link> /
            <Link to="/home">홈</Link> /
            <Link to="/about">소개</Link> /
            <Link to="/dashboard">대시보드</Link> /
            <Link to="/login">로그인</Link> /
            <Link to="/categories">카테고리</Link>
        </div>
    )
}

export default Navbar;