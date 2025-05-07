import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import { store } from './Store';
import { addTodo,removeToto } from './Action';
import {Provider,useDispatch,useSelector}from 'react-redux'

const TodoList = () => {

  //리덕스에 저장된 state를 가져와서 컴포넌트에서 쓰게 해주는것.
  const todos = useSelector((state)=>state.todos)

  //나중에 사용할 디스패치 선언해주고
  const dispatch = useDispatch()
  
  const[input,setInput] = useState("")



  const handleAddTodo = () => {
    if(input.trim().length != ""){
      //디스패치 - 스토어에서 제공하는 함수
        //액션을 발생 -> 리듀서가 상태를 업데이트 하도록 한다.
      dispatch(addTodo(Date.now(),input))
      setInput(" ")
    }
    console.log(todos)
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeToto(id));
  }


  return(
    <div>
      <h1>Todo List</h1>
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Add ad new todo'></input>
      <button onClick={handleAddTodo} type='button'>Add Todo</button>

      <ul>

        {todos.map((todo)=>{
          <li key={todo.id}>
            {todo.text}
            <button onClick={()=>handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        })}

      </ul>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList/>
      </Provider>
    </div>
  );
}

export default App;
