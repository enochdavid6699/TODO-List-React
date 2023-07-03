import './App.css';
import Header from "./MyComponents/header.js";
import TODOS from "./MyComponents/todos";
import Footer from "./MyComponents/footer";
import React, {useState} from 'react';


function App() {

  const onDelete = (todo)=>{

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    
    console.log('Deleted:', todo);
    
  }

  const [ todos , setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market and get the job done"
    },
    {
      sno: 2,
      title: "Go to the market",
      desc: "You need to go to the market and get the job done"
    },
    {
      sno: 3,
      title: "Go to the market",
      desc: "You need to go to the market and get the job done"
    },
    {
      sno: 4,
      title: "Go to the market",
      desc: "You need to go to the market and get the job done"
    }
  ]);

  return (
    <>
      <Header title="MyTodosList" />

      <TODOS todos={todos} onDelete={onDelete} />

      <Footer/>
    </>
  );
}

export default App;
