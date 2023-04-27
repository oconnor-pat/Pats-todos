import PropTypes from "prop-types";
import Styled from "styled-components";

const StyledRemoveButton = Styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`;

const StyledEditButton = Styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  `;

const TodoItem = ({ index, task, removeTodoItem, editTodoItem }) => {
  return (
    <div>
      <li>{task}</li>
      <StyledRemoveButton onClick={() => removeTodoItem(index)}>Remove</StyledRemoveButton>
      <StyledEditButton onClick={() => editTodoItem(index)}>Edit</StyledEditButton>
    </div>
  );
};

TodoItem.propTypes = {
    index: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    removeTodoItem: PropTypes.func.isRequired,
    editTodoItem: PropTypes.func.isRequired,
};

export default TodoItem;
