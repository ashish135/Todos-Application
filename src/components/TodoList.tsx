import React from 'react'
import { Todos } from '../models/Todos'
import SingleTodo from './SingleTodo'
import {Droppable} from 'react-beautiful-dnd'

const TodoList:React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='flex gap-5'>
        <Droppable droppableId="droppableAdd">
        { (provided) => <div ref={provided.innerRef} {...provided.droppableProps} className='bg-neutral-100 rounded-lg shadow-md activeTodos w-full p-5'>
          <h2 className='font-bold mb-4 text-2xl'>Active Todos</h2>
          {todos.length > 0 ? todos && todos.map( (todo, index) => {
            return !todo.isCompleted ? <SingleTodo index={index} key={todo.id} todo={todo} todos={todos} setTodos={setTodos} /> : null
        }) : 'No new todos found.'}
        {provided.placeholder}
        </div>}
        </Droppable>
        <Droppable droppableId="droppableRemove">
        { (provided)=> <div ref={provided.innerRef} {...provided.droppableProps} className='bg-neutral-100 rounded-lg shadow-md completedTodo w-full p-5'>
          <h2 className='font-bold mb-4 text-2xl'>Completed Todos</h2>
          {todos.length > 0 ? todos && todos.map( (todo, index) => {
            return todo.isCompleted ? <SingleTodo index={index} key={todo.id} todo={todo} todos={todos} setTodos={setTodos} /> : null
        }): 'No completed todos found'}
        {provided.placeholder}
        </div>}
        </Droppable>
    </div>
  )
}

export default TodoList

interface Props {
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}