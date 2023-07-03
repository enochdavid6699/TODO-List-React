import React from 'react';
import TodoItem from './todoItem';

export default function Todos(props) {
  return (
    <div className="container">
      <h3 className='text-center my-3'>Todos List</h3>
      
      {/* Conditional rendering based on the length of the todos array */}
      {props.todos.length === 0 ? (
        "No Todos to display"
      ) : (
        // Mapping over the todos array and rendering TodoItem component for each todo
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
}
