import React, { useState } from "react";
import { Todo } from "../App";
import { addMission } from "../servise/api-endpoints";
interface Props {
  setTodo: (x: (todos: Todo[]) => Todo[]) => void;
  apikey: string;
}
const Add = ({ setTodo }: Props) => {
  const [soldierName, setName] = useState("");
  const [soldierPiority, setPoirity] = useState("");
  const [soldierStatus, setStatus] = useState("");
  const [soldierDescription, setDescription] = useState("");
  const addTodo = async ({ apikey }: Props) => {
    // if (!soldierName || !soldierPiority || !soldierStatus) {
    //   alert("All fields are required");
    //   return;
    // }
    try {
      const newMission = await addMission(apikey, {
        name: soldierName,
        description: soldierDescription,
        priority: soldierPiority,
        status: soldierStatus,
      });
      setTodo((todos) => [...todos, newMission]);
      setName("");
      setPoirity("");
      setDescription("");
      setStatus("");
    } catch (error) {
      alert("Failed to add mission");
      console.error(error);
    }
  };
  return (
    <div className="form">
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
        <option value="Pending">pending</option>
        <option value="In progres">in progres</option>
        <option value="Completed">completed</option>
      </select>
      <button onClick={() => addTodo}>Add Todo</button>
    </div>
  );
};

export default Add;
