import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import Styled from "styled-components";

// Styles
const StyledTitle = Styled.h1`
font-size: 75px;
font-weight: bold;
color: ${(props) => props.theme.text};
margin-bottom: 20px;
`;

const Container = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const StyledRemoveAllItemsButton = Styled.button`
width: 200px;
background-color: red;
color: #333;
padding: 10px;
margin-top: 20px;
font-size: 16px;
border: 1px solid #000000;
border-radius: 5px 5px 5px 5px;
cursor: pointer;
`;

const TODO_STORAGE_KEY = "todos";

// function to check if user has dark mode enabled
const isDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
  
  const defaultTheme = isDarkMode() ? 'dark' : 'light';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    // Set the theme in local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Load the theme from local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3001/todos")
  //     .then((res) => res.json())
  //     .then((data) => setTodos(data));
  // }, []);

    // Load todos from localStorage on mount
    useEffect(() => {
      const storedTodos = localStorage.getItem(TODO_STORAGE_KEY);
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }, []);
  
    // Save todos to localStorage whenever they change
    useEffect(() => {
      localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

  // function to add new todo item to list
// function to add new todo item to list and database
const addTodoItem = (task) => {
  const newTodo = { task, _id: Date.now() };
  setTodos([...todos, newTodo]);
  // make POST request to backend to add new todo item
  // fetch('http://localhost:3001/todos', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ task }),
  // })
  //   .then((res) => res.json())
  //   .then((newTodo) => {
  //     // add new todo item to the state
  //     setTodos([...todos, newTodo]);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
};

  // function to remove todo item from list
  const removeTodoItem = (index) => {
    const updatedTodos = todos.filter((_item, i) => i !== index);
    setTodos(updatedTodos);
    // fetch(`http://localhost:3001/todos/${todos[index]._id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     const updatedTodos = todos.filter((_item, i) => i !== index);
    //     setTodos(updatedTodos);
    //   });
  };  

  // function to edit todo item in list
  const editTodoItem = (index, updatedTask) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // function to remove all todo items from list
  const removeAllItems = () => {
    setTodos([]);
  };

  return (
    <Container>
      <StyledTitle>Pats Todos</StyledTitle>
      <TodoForm addTodoItem={addTodoItem} removeAllItems={removeAllItems} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            task={todo.task}
            todo={todos}
            removeTodoItem={removeTodoItem}
            editTodoItem={editTodoItem}
            removeAllItems={removeAllItems}
          />
        ))}
      </ul>
      {todos.length > 0 && <StyledRemoveAllItemsButton onClick={removeAllItems}>Remove All Items</StyledRemoveAllItemsButton>}
    </Container>
  );
};

export default TodoList;
