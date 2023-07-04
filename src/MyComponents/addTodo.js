import React, { useState } from 'react'

export default function AddTodo(props) {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {

    //To stop the page from reloading
    e.preventDefault();

    if( !title || !desc ){
      alert('Title or Desc cannot be blank');
      return;
    }

    props.addTodo(title , desc);

  }

  return (
    <div className='container'>
      <h3>
        Add a TODO
      </h3>
      <form className="row g-3" onSubmit={submit}>
        <div className="col-md-6">
          <label htmlFor="title" className="htmlForm-label">TODO</label>
          <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="htmlForm-control" id="title" />
        </div>
        <div className="col-md-6">
          <label htmlFor="desc" className="htmlForm-label">Description</label>
          <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="htmlForm-control" id="desc" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add TODO</button>
        </div>
      </form>
    </div>
  )
}
