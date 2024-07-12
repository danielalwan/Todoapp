import { createContext, useEffect, useState } from 'react';
import { Todo } from '../lib/types';

type TodoContextProviderProps = {
  children: React.ReactNode;
};

type TodoContextType = {
  todos: Todo[];
  totalTodos: number;
  completedTodos: number;
  handleAddtodo: (text: string) => void;
  handleDeleteTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
};

export const ToDosContext = createContext<TodoContextType | null>(null);

const getInitinalTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

export default function TodoContextProvider({
  children,
}: TodoContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(getInitinalTodos);
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  const handleAddtodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        text: text,
        isCompleted: false,
      },
    ]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  //här lägger vi bara till datan till local storage
  // när man har en tom array i useeffect betyder det att man bara gör en gång. det betyder att den körs varje gång todo ändras

  return (
    <ToDosContext.Provider
      value={{
        todos,
        totalTodos,
        completedTodos,
        handleAddtodo,
        handleDeleteTodo,
        handleToggleTodo,
      }}
    >
      {children}
    </ToDosContext.Provider>
  );
}
