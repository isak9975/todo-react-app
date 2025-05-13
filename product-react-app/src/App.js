import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import { Find } from './Find';
import { Create } from './Create.js';
import React, { useRef,useContext } from 'react';

function App() {

  

  return (
    
      <div className="App">
        <h2>메인페이지</h2>
        <Link to='/create'>제품 입력</Link> / 
        <Link to='/'>완료</Link>

        <Routes>
          <Route path='/find' element={<Find/>}/>
          <Route path='/create' element={<Create />}/>
        </Routes>
        
        <Find />
        

        
      </div>

  )
}

export default App;
