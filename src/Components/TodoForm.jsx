import { useState } from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const StyledFormContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const StyledInput = Styled.input`
  width: 70%;
  padding: 10px;
  margin-right: 10px;
  fotn-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px 5px 5px 5px;
`;

const StyledButton = Styled.button`
  background-color: #d4af37;
  color: #333;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 5px 5px 5px 5px;
  cursor: pointer;
`;

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // if input field is empty, remove all items from list
    if (inputValue.trim() === "") {
      props.removeAllItems();
    } else {
    // add new todo item using props function
    props.addTodoItem(inputValue);
    }
    // clear input field
    setInputValue("");
  };

  // handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledFormContainer>
      <StyledInput
        type="text"
        placeholder="Enter new todo item"
        value={inputValue}
        onChange={handleChange}
      />
      <StyledButton type="submit">Add Task</StyledButton>
      </StyledFormContainer>
    </form>
  );
};

TodoForm.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
  removeAllItems: PropTypes.func.isRequired,
};

export default TodoForm;
