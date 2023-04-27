import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // add new todo item using props function
    props.addTodoItem(inputValue);
    // clear input field
    setInputValue("");
  };

  // handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new todo item"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default TodoForm;
