import './App.css';
import Header from "./MyComponents/header.js";
import TODOS from "./MyComponents/todos";
import Footer from "./MyComponents/footer";
import React, {useState} from 'react';
import AddTodo from './MyComponents/addTodo';


function App() { 

  const addTodo = (title, desc)=>{

    let sno;

    if(todos.length ==0){
      sno=0;
    }else{
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos , myTodo]);
  }

  const onDelete = (todo)=>{

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    
    console.log('Deleted:', todo);
    
  }

  const [ todos , setTodos] = useState([]);

  return (
    <> 
      <Header title="MyTodosList" />

      <AddTodo addTodo={addTodo} /> 

      <TODOS todos={todos} onDelete={onDelete} />

      <Footer/>
    </>
  );
}

export default App;
