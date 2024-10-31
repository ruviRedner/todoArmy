import React from 'react'
import { Todo } from '../App'
import Item from './Item';
interface Props{
    todos:Todo[]
    setTodos: (x: (todos: Todo[]) => Todo[]) => void;
}
const List = ({todos,setTodos}:Props) => {
  return (
    <div className='list-to'>
        <h1>Missions</h1>
        {todos.map((todo)=> <Item key={todo.name} todo={todo} setTodo={setTodos}/>)}
      
    </div>
  )
}

export default List
