import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import Styled from "styled-components";

const StyledTitle = Styled.h1`
font-size: 75px;
font-weight: bold;
color: #fff;
margin-bottom: 20px;
`;

const Container = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // function to add new todo item to list
  const addTodoItem = (task) => {
    // create new todo item
    setTodos([...todos, { task }]);
  };

  // function to remove todo item from list
  const removeTodoItem = (index) => {
    const updatedTodos = todos.filter((_item, i) => i !== index);
    setTodos(updatedTodos);
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
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            task={todo.task}
            removeTodoItem={removeTodoItem}
            editTodoItem={editTodoItem}
          />
        ))}
      </ul>
      <TodoForm addTodoItem={addTodoItem} />
      {todos.length > 0 && <button onClick={removeAllItems}>Remove All Items</button>}
    </Container>
  );
};

export default TodoList;
