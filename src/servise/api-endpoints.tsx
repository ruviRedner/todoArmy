import { Todo } from "../App";
const apiUrl = "https://reactexambackend.onrender.com/missions";

export const getMission = async (apiKey: string): Promise<Todo[]> => {
  const response = await fetch(`${apiUrl}/${apiKey}`);
  if (!response.ok) {
    throw new Error("failed to get");
  }
  const data = await response.json();
  return data;
};
export const addMission = async (
  apiKey: string,
  mission: Todo
): Promise<void> => {
  const res = await fetch(`${apiUrl}/${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mission),
  });
  if (!res.ok) {
    throw new Error("failed to post");
  }
};
export const deleteMission = async (
  apikey: string,
  id: string
): Promise<void> => {
  const res = await fetch(`${apiUrl}/${apikey}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("failed to delete");
  }
};
export const updateMissionStatus = async (
  apikey: string,
  id: string
): Promise<void> => {
  const response = await fetch(`${apiUrl}/${apikey}/progress/${id}`, {
    method: "POST",
  });
  if (!response.ok) throw new Error("Failed to update mission status");
};
