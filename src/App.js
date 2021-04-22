import './App.css';
import { AddTodoAction, RemoveTodoAction  } from './actions/TodoActions';
import {JsonApi} from './actions/ApiActions'
import {useDispatch,useSelector} from "react-redux";
import React, { useEffect, useState } from "react";
import { FiDelete } from 'react-icons/fi';
import axios from 'axios';

function App() {
  const [todo , setTodo] = useState('');
  let [responseData, setResponseData] = useState('');

    useEffect(()=>{
    setResponseData(dispatch(JsonApi(todo)))
   },[])



  const dispatch= useDispatch();
  const Todo = useSelector(state => state.Todo);
  const {todos} = Todo;

  const Api = useSelector(state => state.Api);

  const {success} = Api;

  // if (success.success === 201) {
  //   var msg = "successfully created";
  // }

  // if (success.success === 404) {
  //   var msg = "error 404"
  // }

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(AddTodoAction(todo))
    };
  
  const removeHandler = (t)=>{
    dispatch(RemoveTodoAction(t));
  };

  
  const handleShow = ()=>{
  dispatch(JsonApi(todo))
  };

  const handleCheck = (t) => {
    // dispatch(CheckboxCheckAction(t));
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
            >Add</button>
       </form>

          <button onClick = {handleShow}>Api</button>
            {/* <h3>{msg}</h3> */}

       <div className="allTodos">
         {
           todos &&
            todos.map((t,index) => (
            <div key = {t.id} className="singleTodo ">
              {/* <input type="checkbox" 
              checked={t.isCompleted} 
              onChange={() => { handleCheck(index) }} /> */}
              <span className="todoText">{t.todo}</span>
              <span
              onClick={()=>removeHandler(t)}
              ><FiDelete/></span>
          </div>
           ))
         }
       </div>

       <div>
        {
          success && success.map((s,index)=>(
            <div key= {s.id} className ="singleTodo">
              <span className = "todoText">{s.title}</span>
       </div> 
       ))
      }  
       </div> 
      </header>
    </div>
  );
}

export default App;
