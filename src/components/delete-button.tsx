import useTodoContext from '../hooks';

type DeletebuttonProps = {
  id: number;
};

export default function DeleteButton({ id }: DeletebuttonProps) {
  const { handleDeleteTodo } = useTodoContext();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
