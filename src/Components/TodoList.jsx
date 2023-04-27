import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

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

  return (
    <div>
      <h1>Pats Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            task={todo.item}
            removeTodoItem={removeTodoItem}
            editTodoItem={editTodoItem}
          />
        ))}
      </ul>
      <TodoForm addTodoItem={addTodoItem} />
    </div>
  );
};

export default TodoList;
