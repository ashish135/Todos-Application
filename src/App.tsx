import React, { useState } from 'react';
import './styles/style.css';
import TodoInput from './components/TodoInput';
import { Todos } from './models/Todos';
import TodoList from './components/TodoList';

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);
  const handleAddTodos = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {
        id: Date.now(),
        title: todo,
        isCompleted: false
      }])
    }
    setTodo("");
  }
  console.log("todos", todos)
  return (
    <div className='container-xl max-w-7xl mx-auto p-10'>
      <h1 className="text-3xl font-bold underline mb-10">
      Todo Application
    </h1>
    <TodoInput todo={todo} setTodo={setTodo} handleAddTodos={handleAddTodos} />
    <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
};

export default App;