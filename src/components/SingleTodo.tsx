import React from 'react'
import { CheckIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Todos } from '../models/Todos'
import { Draggable } from 'react-beautiful-dnd'

const SingleTodo:React.FC<Props> = ({index, todo, todos, setTodos}) => {
    const handleEdit = (id:number, title:string) => {
        const todoList = todos.map( (todo) => todo.id === id ? {...todo, title: title} : todo);
        setTodos(todoList);
    }
    const handleComplete = (id:number) => {
        //Mark todo as complete or incomplete
        const todoList = todos.map( (todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo);
        setTodos(todoList);
    }   
    const handleDelete = (id:number) => {
        const todoList = todos.filter( (todo) => todo.id !== id );
        setTodos(todoList);
    }
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
        { (provided)=> <div {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef} className="bg-white rounded-lg border p-2 md:p-3 lg:p-4 mb-3">
    <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
        {todo.isCompleted ? <h2 className="text-sm font-semibold mb-2"><s>{todo.title}</s></h2> : <h2 className="text-sm font-semibold mb-2"><input type='text' onChange={ (e) => handleEdit(todo.id, e.target.value || '')} value={todo.title} /></h2>}
        {/* <p className="text-gray-600">Card description goes here.</p> */}
        </div>
        <div className="md:flex md:space-x-2">
        <button onClick={()=>handleComplete(todo.id)} className="bg-green-500 flex items-center gap-1 text-white font-semibold py-2 px-3 rounded-md">{ todo.isCompleted ? <XMarkIcon className="h-4 w-4 text-white-500" /> : <CheckIcon className="h-4 w-4 text-white-500" /> }</button>
        <button onClick={()=>handleDelete(todo.id)} className="bg-red-500 flex items-center gap-1 text-white font-semibold py-2 px-3 rounded-md"><TrashIcon className="h-4 w-4 text-white-500" /></button>
        </div>
    </div>
    </div>}
    </Draggable>
  )
}

export default SingleTodo

interface Props {
    index: number,
    todo: Todos,
    todos: Todos[],
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}