import Button from './button';

import useTodoContext from '../hooks';
import { useState } from 'react';

export default function AddToDoForm() {
  const [text, setText] = useState('');
  const { handleAddtodo } = useTodoContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddtodo(text);
        setText('');
      }}
    >
      <h2 className='font-medium text-black'>Add a todo</h2>
      <input
        className='h-12 border block w-full px-4 border-black/50 rounded-md my-2 text-sm '
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button>Add to list</Button>
    </form>
  );
}
