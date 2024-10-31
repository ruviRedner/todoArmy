import React from "react";
import { Todo } from "../App";
import { deleteMission, updateMissionStatus } from "../servise/api-endpoints";
interface Props {
  todo: Todo;
  setTodo: (todos: Todo[]) => void;
  apikey: string;
}
const Item = ({ todo, setTodo,apikey }: Props) => {
  const handleDelete = async () => {
    const del = await deleteMission(apikey,todo.id)
    setTodo((prevTodos) => {prevTodos.filter((t) => t.id!== todo.id))
    
  
  }
  const hendelStatus = async () => {
    const up = await updateMissionStatus(apikey,todo.id)
  }
  
  return (
    <div className="item">
      <h2>Name:{todo.name}</h2>
      <p>Poirity:{todo.priority}</p>
      <p>Status:{todo.status}</p>
      <p>Description:{todo.description}</p>
      <div className="btn">
      <button onClick={handleDelete}>Delete</button>
      <button onClick={hendelStatus}>Pending</button>
      </div>
    </div>
  );
};

export default Item;
