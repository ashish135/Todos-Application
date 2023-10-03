import React, { useState } from 'react';
import './styles/style.css';
import TodoInput from './components/TodoInput';
import { Todos } from './models/Todos';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

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

  const handleDragend = (data:DropResult) => {
    const {source, destination} = data;
    //Dragend event
    if(!destination) return;
    if(source.droppableId === destination.droppableId && source.index === destination.index) return;
    var livetodos = todos && todos.filter( todo => !todo.isCompleted);
    var completed = todos && todos.filter( todo => todo.isCompleted);

    if(source.droppableId === "droppableAdd" && destination.droppableId === "droppableRemove"){
      const todoList = todos.map( (todo, index) => index === source.index ? {...todo, isCompleted: !todo.isCompleted} : todo);
      setTodos(todoList);
      console.log("complete 1", source, destination)
    } else if(source.droppableId === "droppableRemove" && destination.droppableId === "droppableAdd") {
      const todoList = todos.map( (todo, index) => index === source.index ? {...todo, isCompleted: !todo.isCompleted} : todo);
      setTodos(todoList);
      console.log("complete 2", source, destination)
    }
  }
  return (
    <DragDropContext onDragEnd={handleDragend}>
    <div className='container-xl max-w-7xl mx-auto p-10'>
      <h1 className="text-3xl font-bold underline mb-10">
      Todo Application
    </h1>
    <TodoInput todo={todo} setTodo={setTodo} handleAddTodos={handleAddTodos} />
    <TodoList todos={todos} setTodos={setTodos} />
    </div>
    </DragDropContext>
  )
};

export default App;