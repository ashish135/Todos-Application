import React from 'react'
import { Todos } from '../models/Todos'
import SingleTodo from './SingleTodo'
const TodoList:React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div>
        {todos && todos.map(todo => {
            return <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        })}
    </div>
  )
}

export default TodoList

interface Props {
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}