import './App.css';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import {useDispatch,useSelector} from "react-redux";
import {useState} from "react";

function App() {
  const [todo , setTodo] = useState();

  const dispatch= useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const{todos} = Todo;

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(AddTodoAction(todo))
  };

  const removeHandler = (t)=>{
    dispatch(RemoveTodoAction(t));
  }

  return (
    <div className="App">
      <header className="App-header">
       <h3>Todo list App</h3>
       <form onSubmit={handleSubmit}>
         <input 
          placeholder ="Enter a Todo"
          style={{
            width:350,
            padding:10,
            borderRadius:20,
            border:"none",
            fontSize:20,
          }}
          onChange={(e)=>setTodo(e.target.value)}
          />
          <button 
            type="submit"
            style={{
              padding:12,
              borderRadius:25,
              marginLeft:20,
              fontSize:15,
            }}
            >Go</button>
       </form>
       <div className="allTodos">
         {
           todos &&
            todos.map((t) => (
            <div key = {t.id} className="singleTodo ">
            <span className="todoText">{t.todo}</span>
            <button
            style={{
              padding:10,
              borderRadius:25,
              border:"1px solid white",
              color:"white",
              backgroundColor:'orangered',
            }}
            onClick={()=>removeHandler(t)}
            >Delete</button>
         </div>
           ))
         }
       </div>  
      </header>
    </div>
  );
}

export default App;
