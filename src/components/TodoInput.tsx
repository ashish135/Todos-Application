import React from 'react'

const TodoInput:React.FC<PropType> = ({todo, setTodo, handleAddTodos}) => {
  return (
    <div className='max-w-4xl mb-5'>
        <form className='flex gap-2' onSubmit={handleAddTodos}>
            <div className='field-wrap'>
                <input value={todo} onChange={ (e)=> setTodo(e.target.value)} className='rounded-md border-0 h-10 py-1.5 px-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6' name='todo' id='todo' placeholder='Add your todos here..' />
            </div>
            <div className='field-wrap'>
                <button className='rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300' type='submit' id='add-todo'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default TodoInput

interface PropType {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodos: (e:React.FormEvent)=>void;
}