import React, { useState } from "react";
import { Todo } from "../App";
import { addMission } from "../servise/api-endpoints";
interface Props {
  setTodo: (x: (todos: Todo[]) => Todo[]) => void;
  apikey: string;
}
const Add = ({ setTodo, apikey }: Props) => {
  const [soldierName, setName] = useState<string>("");
  const [soldierPiority, setPoirity] = useState<string>("");
  const [soldierStatus, setStatus] = useState<string>("");
  const [soldierDescription, setDescription] = useState<string>("");
  const addTodo = async () => {
    if (!soldierName || !soldierPiority || !soldierStatus) {
      alert("All fields are required");
      return;
    }

    try {
      const newMission = await addMission(apikey, {
        name: soldierName,
        status: soldierStatus,
        priority: soldierPiority,
        description: soldierDescription,
      });

      setTodo((todos) => [...todos, newMission]);
      setName("");
      setPoirity("");
      setDescription("");
      setStatus("");
    } catch (error) {
      throw new Error("Failed to add mission");
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

      <select
        name=""
        id=""
        onChange={(e) => setPoirity(e.target.value)}
        value={soldierPiority}
      >
        <option value="" disabled>
          choose priority
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select
        name=""
        id=""
        onChange={(e) => setStatus(e.target.value)}
        value={soldierStatus}
      >
        <option value="" disabled>
          choose status
        </option>
        <option value="Pending">pending</option>
        <option value="In Progress">in progres</option>
        <option value="Completed">completed</option>
      </select>
      <input
        type="text"
        placeholder="type description"
        onChange={(e) => setDescription(e.target.value)}
        value={soldierDescription}
      />
      <button className="btnAdd" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default Add;
