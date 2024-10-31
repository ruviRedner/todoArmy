import React, { useEffect, useState } from "react";
import { Todo } from "../App";
import Item from "./Item";
import { getMission } from "../servise/api-endpoints";
interface Props {
  todos: Todo[];
  setTodos: (x: Todo[]) => void;
  apikey: string;
}
const List = ({ todos, setTodos, apikey }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getMissions = async () => {
      try {
        const res = await getMission(apikey);

        setTodos(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMissions();
  }, [todos]);
  return (
    <div className="list">
      <h1>Missions</h1>
      {loading ? <p>loading...</p> : null}
      {todos.map((todo) => (
        <Item
          key={todo.name}
          todo={todo}
          setTodo={setTodos}
          apikey={apikey}
          todos={todos}
        />
      ))}
    </div>
  );
};

export default List;
