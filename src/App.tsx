import React, { useState } from 'react'
import Add from './components/Add'
import List from './components/List'
export interface Todo{
  _id?:string
  name:string
  status:string
  priority:string
  description:string
}
const apikey:string = "8289757" 
const App = () => {
  const [todos,setTodo] = useState<Todo[]>([])
  return (
    <div className='app'>
      <h1>Management of military missions</h1>
      <Add setTodo={setTodo} apikey={apikey}/>
      <List todos={todos} setTodos={setTodo} apikey={apikey}/>
    </div>
  )
}

export default App
