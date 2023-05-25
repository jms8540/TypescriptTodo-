import {useState } from 'react';
import type {ChangeEvent, KeyboardEvent} from 'react';

import {v4 as uuidv4} from 'uuid';

import Input from './components/Input';
import TodoList from './components/TodoList';

import type { Todo } from './types/todo';

import "./App.css"

function App() {
  const [todoName, setTodoName] = useState<Todo['name']>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [setectedTodoIds, setSelectedTodoIds] = useState<Todo["id"][]>([]);
  // string 밖에 안들어감
  const handleTodoName = ({
    target: {value},
  }: ChangeEvent<HTMLInputElement>)=>{
    setTodoName(value);
  }


  const handleSearchValue = ({
    target: {value},
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  const handleDeletTodo = (id: Todo["id"]) => {
    setTodos(prevState =>{
      const filterTodos = [...prevState].filter((todo) => todo.id !== id);
      return filterTodos
    })
  }

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  
  const addTodo  = () => {
    setTodos((prevState) => [...prevState, { id: uuidv4(), name: todoName}])
    setTodoName("")
  };


  return (
    <div className="App">
      <Input value={todoName} onChange={handleTodoName} onKeyUp={handleEnterPress}/>
      <button onClick={addTodo}>Todo 추가</button>
      <Input onChange={handleSearchValue} />
      <TodoList 
        todos={todos}
        searchValue={searchValue}
        deleteTodo={handleDeletTodo}
        setSelectedTodoIds={setSelectedTodoIds}
      />
    </div>
  );
}

export default App;
