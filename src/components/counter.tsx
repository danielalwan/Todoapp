
import useTodoContext from '../hooks';

export default function Counter() {

  const { totalTodos, completedTodos } = useTodoContext();
  return (
    <p>
      <b>{completedTodos}</b> / {totalTodos} completed
    </p>
  );
}
