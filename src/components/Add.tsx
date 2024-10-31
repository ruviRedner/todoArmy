import React, {  useState } from "react";
import { Todo } from "../App";
interface Props {
  setTodo: (x: (todos: Todo[]) => Todo[]) => void;
}
const Add = ({ setTodo }: Props) => {
  const [soldierName, setName] = useState("");
  const [soldierPiority, setPoirity] = useState("");
  const [soldierStatus, setStatus] = useState("");
  const [soldierDescription, setDescription] = useState("");
  const addTodo = async () => {};
  return (
    <div>
      <input
        type="text"
        placeholder="type name"
        onChange={(e) => setName(e.target.value)}
        value={soldierName}
      />
     
      <input
        type="text"
        placeholder="type description"
        onChange={(e) => setDescription(e.target.value)}
        value={soldierDescription}
      />
      <select
        name="piority"
        id=""
        onChange={(e) => setPoirity(e.target.value)}
        value={soldierPiority}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select
        name="status"
        id=""
        onChange={(e) => setStatus(e.target.value)}
        value={soldierStatus}
      >
        <option value="pending">pending</option>
        <option value="in progres">in progres</option>
        <option value="completed">completed</option>
      </select>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default Add;
