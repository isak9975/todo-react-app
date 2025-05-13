import logo from './logo.svg';
import logo1 from './고양6-3.png';
import './App.css';
import Todo from './Todo';
import Example from './Example.js';
import { Farewell } from './Greetings.js';
import { useState,useEffect } from 'react';
import {AppBar, Button, Container,Grid,List, Paper, Toolbar, Typography} from '@mui/material'
import AddTodo from './AddTodo.js';
import axios from 'axios'
import { call, signout } from './service/APIService.js';
import { Link } from 'react-router-dom'


//Container
//레이아웃의 가로폭을 제한하고, 중앙 정렬 및 기본 패딩을 자동으로 적용해주는 컴포넌트
//maxWidth : 최대 너비를 지정(xs, sm, md, lg, xl, false)
//fixed : maxWidth와 관계 없이 항상 고정폭 적용.


function App() {
  //하나의 할 일 을 객체로 관리할 것이다.
  //id, title, done => 하나로 묶어 객체로 관리
  //사용자에게 보여줄 Todo한줄의 모음 = items
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);

useEffect(()=>{
  //우리의 백엔드 url을 적어서 요청
  //조회
  call("/todo","GET")
    .then(result => {
      if(result&&result.data){
        setItems(result.data)
      }else{
      console.log("result.data=null")
      setItems([])
      }
      setLoading(false)
    })   
    .catch(error=>{
      console.log("정보를 가져올 수 없음",error);
      setItems([]);
    }) 

},[]) 

    //(1)Create
    const add = (item) => {
        //데이터베이스에 추가하기 위해 백엔드로 데이터를 전달
        call("/todo","POST",item)
        //데이터를 추가하고, 전체 데이터를 반환받아서 state에 세팅을 하여 
        //다시 렌더링이 일어남
          .then(result => {setItems(result.data)})

          
    }

    //(2)Delete
    //삭제를 해주는 deleteitem() 함수 만들기
    //delete from 테이블 where id=''
    //useState(), 기능을 하는 함수를 App.j에 만든 이유
    //전체 Todo 리스트는 App.js에서 관리를 하기 때문에
    const deleteItem = (item) => {
      call("/todo","DELETE",item)
        .then(result => {setItems(result.data)})
    }


    //(3)Update
    //Todo의 수정
    const editiItem = (item) =>{
      call("/todo","PUT",item)
        .then(result => setItems(result.data))
        
    }


    //item = title:"값"
    //newItem = title:"값",id:ID-"번호"
    //Items = [{title:"값1",id:ID-"번호"},
    //                title:"값2",id:ID-"번호"]


//react는 key속성에 들어잇는 값을 참고해서, 리스트의 요소가 변경될 경우
//어떤 요소가 변경되었는지 빠르게 파악할 수 있다.
//  ㄴ key없어도 동작은 하네.
//배열에 내용이 있을때만 렌더링 해라
const todoItems = items?.length > 0 && 
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

//네비게이션 바
let nagivationBar = (
  <AppBar position='static'>
    <Toolbar>
      <Grid justifyContent="space-between" container  sx={{flexGrow:1}}>
        <Grid item>
          <Typography variant='h5'><Link to='/' style={{textDecoration:"none",color:"white"}}>오늘의 할 일</Link></Typography>
        </Grid>
        <Grid item>
            <Button color='inherit' raised onClick={signout}>
              로그아웃
            </Button>
        </Grid>
          <Grid item>
            <Button color='inherit' raised onClick={()=>{window.location.href="/signup"}}>
              회원가입
            </Button>
        </Grid>
        <Grid item>
            <Button color='inherit' raised onClick={()=>{window.location.href="/"}}>
              홈
            </Button>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)


//로딩중이 아닐때 렌더링할 부분
let todoListPage = (
  <div>
    {nagivationBar}
      <Container maxWidth="md">
        
        {/* Todo로 item객체를 전달. */}
        <AddTodo add={add}/>
        <div className="TodoList"> {todoItems} </div>
                        
      {/* </header> */}
      </Container>
  </div>
);

//로딩중일 때 렌더링할 부분
   let loadingPage = <h1>로딩중...</h1>
   let content = loadingPage;

   if(!loading){
    content = todoListPage;
   }


   
  return (
    <div className='App'>
      {content}
    </div>
  );
}

export default App;
