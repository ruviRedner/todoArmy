import React, { useState } from "react";
import { Todo } from "../App";
import { deleteMission, updateMissionStatus } from "../servise/api-endpoints";
interface Props {
  todo: Todo;
  setTodo: (todos: Todo[]) => void;
  todos: Todo[];
  apikey: string;
}

const Item = ({ todo, setTodo, apikey, todos }: Props) => {
  const handleDelete = async () => {
    await deleteMission(apikey, todo._id!);
    setTodo(todos.filter((t) => t._id !== todo._id));
  };
  const hendelStatus = async () => {
    const up = await updateMissionStatus(apikey, todo._id!);
    setTodo(
      todos.map((t) => (t._id === todo._id ? { ...t, status: up.status } : t))
    );
  };

  return (
    <div
      className="item"
      style={{
        backgroundColor:
          todo.status === "Pending"
            ? "red"
            : todo.status === "In Progress"
            ? "yellow"
            : "green",
      }}
    >
      <div className="y">
        <h2>Name:{todo.name}</h2>
        <p>Poirity:{todo.priority}</p>
        <p>Status:{todo.status}</p>
        <p>Description:{todo.description}</p>
      </div>
      <div className="btn">
        <button className="del" onClick={handleDelete}>
          Delete
        </button>
        <button
          className="edit"
          onClick={hendelStatus}
          disabled={todo.status === "Completed"}
        >
          {todo.status === "Completed" ? "mission completed" : "progress"}
        </button>
      </div>
    </div>
  );
};

export default Item;
