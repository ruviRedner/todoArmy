import React, { useState } from 'react'
import Add from './components/Add'
import List from './components/List'
export interface Todo{
  name:string
  status:string
  priority:string
  description:string
}
const App = () => {
  const [todos,setTodo] = useState<Todo[]>([])
  return (
    <div>
      <h1>Management of military missions</h1>
      <Add setTodo={setTodo}/>
      <List todos={todos} setTodos={setTodo}/>
    </div>
  )
}

export default App
