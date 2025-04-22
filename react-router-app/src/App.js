import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Routting } from './Routting';
import {Home,Login,NotFound, PrivateRoute} from './Pages'
import { Route,Routes } from 'react-router-dom';
import {Home3,Home3Detail,Categories,ProductDetail,Products} from './Exam.js';
//Routes : swtich 같은 개념으로 가,장 구체적인 경로를 우선 매칭한다.
//Route들을 그룹화 하는 컴포넌트

//Route : URL과 컴포넌트를 매핑하여 특정 경로에 맞는 컴포넌트를 렌더링한다.
//Route 컴포넌트의 주요 속성
//1. path
//URL 경로를 정의한다.
//사용자가 특정 경로에 접근할 때 어떤 컴포넌트를 렌더링할지 결정한다.

//2. element
//path에 들어있는 경로와 일치할 때 렌더링할 컴포넌트를 지정한다.

//아이디랑 비밀번호를 백엔드로 보내서 검증을 받았다고 가정을 한다.
const isAuthenticated =false;

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home3/>
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
          {/* 이상한 주로 입력 했을시 NotFound 컴포넌트로 인해 '/'로 다시 돌아온다. */}
          {/* <Route path='*' element={<NotFound/>}/> */}

          {/* <Route path="/login" element={<Login/>}/> */}
          <Route path="/home2" element={<PrivateRoute element={<Home/>} isAuthenticated={isAuthenticated} />}/>

          <Route path="/:lang/home" element={<Home3/>}/>

          <Route path="/categories" element={<Categories/>}/>
          <Route path="/categories/:categoriId" element={<Products/>}/>
          <Route path="/categories/:categoriId/products/:productId" element={<ProductDetail/>}/>


      </Routes>
      <Routting/>
    </div>
  );
}

export default App;
