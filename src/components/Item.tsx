import React from 'react'
import { Todo } from '../App';
interface Props{
    todo:Todo
    setTodo: (x: (todos: Todo[]) => Todo[]) => void;
}
const Item = ({todo,setTodo}:Props) => {
  return (
    <div>
        <h2>Name:{todo.name}</h2>
        <p>Poirity:{todo.priority}</p>
        <p>Status:{todo.status}</p>
        <p>Description:{todo.description}</p>
        <button>Delete</button>
        <button onClick={()=>setTodo}>change status</button>
      
    </div>
  )
}

export default Item
