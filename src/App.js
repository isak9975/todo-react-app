import logo from './logo.svg';
import logo1 from './고양6-3.png';
import './App.css';
import Todo from './Todo';
import Example from './Example.js';
import { Farewell } from './Greetings.js';
import { useState } from 'react';
import {Container,List, Paper} from '@mui/material'
import AddTodo from './AddTodo.js';

//Container
//레이아웃의 가로폭을 제한하고, 중앙 정렬 및 기본 패딩을 자동으로 적용해주는 컴포넌트
//maxWidth : 최대 너비를 지정(xs, sm, md, lg, xl, false)
//fixed : maxWidth와 관계 없이 항상 고정폭 적용.


function App() {
  //하나의 할 일 을 객체로 관리할 것이다.
  //id, title, done => 하나로 묶어 객체로 관리
  //사용자에게 보여줄 Todo한줄의 모음 = items
  const [items,setItems] = useState([])
  

    //(1)
    //Todo를 추가하기 위한 백엔드 콜을 대신할 가짜 함수를 만들어보자.
    const add = (item) => {
        //newItem 객체가 하나의 Todo
        const newItem = {
            ...item, //item = title:"값"
            id:"ID-"+item.length,
            // done:false
        }//newItem = title:"값",id:ID-"번호"
        
        //상태를 변화시키는 함수를 호출하면 state의 변경사항이 화면에 적용이 된다.
        //화살표 함수로 기존의내용(prev) 위에 추가하는거. => 기존내용 + newItem
        setItems(prev=>[...prev,newItem])
        console.log("items : ",[...items, newItem])
    }

    //(2)
    //삭제를 해주는 deleteitem() 함수 만들기
    //delete from 테이블 where id=''
    //useState(), 기능을 하는 함수를 App.j에 만든 이유
    //전체 Todo 리스트는 App.js에서 관리를 하기 때문에
    const deleteItem = (item) => {
    //배열에서 삭제하려고 하는 아이템을 찾는다.
    const newItems = items.filter(e=>e.id!== item.id);
    //삭제할 아이템을 제외한 아이템을 다시 배열에 지정한다..
    setItems([...newItems]);
    }


    //(3)
    //Todo의 수정
    const editiItem = () =>{
      setItems = ([...items]); // ->이게 재 렌더링 해줌
    }


    //item = title:"값"
    //newItem = title:"값",id:ID-"번호"
    //Items = [{title:"값1",id:ID-"번호"},
    //                title:"값2",id:ID-"번호"]


//react는 key속성에 들어잇는 값을 참고해서, 리스트의 요소가 변경될 경우
//어떤 요소가 변경되었는지 빠르게 파악할 수 있다.
//  ㄴ key없어도 동작은 하네.
//배열에 내용이 있을때만 렌더링 해라
const todoItems = items.length > 0 && 
  //Paper컴포넌트
  //종이 같은 표면 효과를 제공하는 컨테이너 컴포넌트
  //elevation(그림자깊이)를 통해 높낮이를 표현하고
  //배경색과 글미자 효과로 콘텐츠를 돋보이게 한다.
<Paper style={{margin: 16}}>
  <List>{/* 일련의 항목을 세로로 나열하는 컨테이너 역활 */}
    {items.map((item) => (
      <Todo item={item} key={item.id} deleteItem={deleteItem} editiItem={editiItem} />
    ))}
  </List>
</Paper>

//item.map(items => <Todo item={items} key={items.id} />)





  return (
    <div>
      <Container maxWidth="md">
    
        {/* Todo로 item객체를 전달. */}
        <AddTodo add={add}/>   {/* AddTodo에 add함수를 전달 */}
        {/* <Todo deleteItem={deleteItem}/> */}
        {todoItems}        
        
      {/* </header> */}
      </Container>
    </div>
  );
}

export default App;
