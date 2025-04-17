import logo from './logo.svg';
import logo1 from './고양6-3.png';
import './App.css';
import Todo from './Todo';
import Example from './Example.js';
import { Farewell } from './Greetings.js';
import { useState } from 'react';
import {List, Paper} from '@mui/material'

function App() {
  //하나의 할 일을 객체로 관리할 것이다.
  //id, title, done => 하나로 묶어 객체로 관리
  const [item,setItem] = useState([

    {
    id :"0",
    title:"Hello world 1",
    done:true
  },{
    id :"1",
    title:"Hello world 2",
    done:false
  },{
    id :"2",
    title:"Hello world 3",
    done:false
  }

])

//react는 key속성에 들어잇는 값을 참고해서, 리스트의 요소가 변경될 경우
//어떤 요소가 변경되었는지 빠르게 파악할 수 있다.
//  ㄴ key없어도 동작은 하네.
//배열에 내용이 있을때만 렌더링 해라
const todoItems = item.length > 0 && 
  //Paper컴포넌트
  //종이 같은 표면 효과를 제공하는 컨테이너 컴포넌트
  //elevation(그림자깊이)를 통해 높낮이를 표현하고
  //배경색과 글미자 효과로 콘텐츠를 돋보이게 한다.
<Paper style={{margin: 16}}>
  <List>{/* 일련의 항목을 세로로 나열하는 컨테이너 역활 */}
    {item.map((items) => (
      <Todo item={items} key={items.id} />
    ))}
  </List>
</Paper>

//item.map(items => <Todo item={items} key={items.id} />)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello React
        </a> */}
        {/* <Example/>
        <Farewell name="김철수"/> */}
        {/* Todo로 item객체를 전달. */}
        {todoItems}
          
        
      </header>
    </div>
  );
}

export default App;
