import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import { useState } from 'react';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      todo: 'Mow the lawn',
      complete: false
    },
    {
      todo: 'Do Laundry',
      complete: false
    },
    {
      todo: 'Make Dinner',
      complete: false
    }])
  const createTodoItem = (todo) => {
    const newCreateTodoItem = [...todoItems, { todo, complete: false }];
    setTodoItems(newCreateTodoItem);
  }
  const deleteTodoItem = (index)=>{
    const newTodoItem = [...todoItems]
    newTodoItem.splice(index,1)
    setTodoItems(newTodoItem)
  }
  return <div className="app">
    <TodoInput createTodoItem={createTodoItem} />
    {todoItems.map((item, index) => (
      <TodoItem key={index} index={index} item={item} deleteTodoItem={deleteTodoItem}/>
    ))}

  </div>;
}

export default App;
