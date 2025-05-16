import logo from './logo.svg';
import './App.css';
import { CustomButton } from './component/CustomButton';
import { BoardList } from './pages/BoardList';
import { BoardProvider } from './context/BoardContext';
import { Route, Routes } from 'react-router-dom';
import { WritePost } from './pages/WritePost';
import { PostDetail } from './pages/PostDetail';
import { EditPost } from './pages/EditPost';

function App() {
  return (
    <BoardProvider>
      <div className="App">
        <Routes>
          {/* 게시판 페이지 */}
          <Route path='/' element={<BoardList/>}/>
          {/* 상세보기 페이지 */}
          <Route path='/post/:id' element={<PostDetail/>}/>
          <Route path='/write' element={<WritePost/>}/>
          <Route path='/edit/:id' element={<EditPost/>}/>
        </Routes>
      </div>
    </BoardProvider>
  );
}

export default App;
