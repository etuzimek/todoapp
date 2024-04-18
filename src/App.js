import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { ListToDo } from './components/ListToDo';

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: todo.length === 0 ? 1 : Math.max(...todo.map(todo => todo.id)) + 1,
      title,
      completed: false,
    }
    setTodo((prev) => [...prev, newTodo])
  }

  const removeTodo = (todoId) => () => {
    setTodo(prev => prev.filter(item => item.id !== todoId))
    }

  const handleDone = (todoId) => () => {
    setTodo(prev => prev.map(item => item.id === todoId ? {...item, completed: !item.completed} : item))
  }

  return (
    <div className="App">
      <Form add={addTodo} />
      <ListToDo todo={todo} remove={removeTodo} handleDone={handleDone} />
    </div>
  );
}

export default App;
