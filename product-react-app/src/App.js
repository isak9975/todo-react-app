import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import { Find } from './Find';
import { Create } from './Create.js';
import React, { useRef,useContext } from 'react';

function App() {

  

  return (
    
      <div className="App">
        <h2 style={{ margin:0,padding:0}}>메인페이지</h2>
        <hr style={{border:"2px solid black", margin:0,padding:0}}/>
        {/* <Link to='/create'>제품 입력</Link> / 
        <Link to='/'>완료</Link> */}
        
        <Find />
        

        
      </div>

  )
}

export default App;
