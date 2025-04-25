import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import { store } from './Store';
import { addTodo,removeToto } from './Action';
import {Provider,useDispatch,useSelector}from 'react-redux'

const TodoList = () => {

  const todos = useSelector((state)=>state.todos)

  const dispatch = useDispatch()
  
  const[input,setInput] = useState("")



  const handleAddTodo = () => {
    if(input.trim().length!=""){
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
