import DeleteButton from './delete-button';

import useTodoContext from '../hooks';

export default function TodoList() {
  const { todos, handleToggleTodo } = useTodoContext();
  return (
    <ul>
      {todos.length === 0 ? (
        <li className='h-full flex justify-center items-center font-bold'>
          No todos yet 😔
        </li>
      ) : (
        ''
      )}
      {todos.map((todo) => (
        <li
          key={todo.text}
          className='flex justify-between items-center px-8 h-16 text-sm cursor-pointer border-b border-black/10'
          onClick={() => handleToggleTodo(todo.id)}
        >
          <span
            className={`${
              todo.isCompleted ? 'line-through text-gray-300' : ''
            }`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} />
        </li>
      ))}
    </ul>
  );
}
