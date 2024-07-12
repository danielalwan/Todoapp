import { useContext } from "react";
import { ToDosContext } from "./context/todo-context";


export default function useTodoContext () {
  const context = useContext(ToDosContext);
  if (!context) {
    throw new Error('useContext must be inside a provider');
  }
  return context;
}