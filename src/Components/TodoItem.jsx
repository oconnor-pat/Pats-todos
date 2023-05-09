import { useState } from "react";
import PropTypes from "prop-types";
import Styled, { css } from "styled-components";

const StyledRemoveButton = Styled.button`
  background-color: #d4af37;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  margin-top: 15px;
  cursor: pointer;
`;

const StyledEditButton = Styled.button`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  margin-top: 15px;
  cursor: pointer;
`;

const StyledCheckbox = Styled.input`
  margin: 10px;
  margin-top: 15px;
  cursor: pointer;
  transform: scale(1.85);
`;

const StyledSaveButton = Styled.button`
  background-color: #d4af37;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`;

const StyledCancelButton = Styled.button`
  background-color: red;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`;

const StyledListItem = Styled.li`
  font-size: 18px;
  color: ${(props) => props.theme.text};
  ${(props) =>
    props.theme.mode === 'light' &&
    css`
      color: #333;
    `}
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const TodoItem = ({ index, task, removeTodoItem, editTodoItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
    setUpdatedTask(task);
  };

  const handleSave = () => {
    editTodoItem(index, updatedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUpdatedTask(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={updatedTask} onChange={handleChange} />
          <StyledSaveButton onClick={handleSave}>Save</StyledSaveButton>
          <StyledCancelButton onClick={handleCancel}>Cancel</StyledCancelButton>
        </>
      ) : (
        <>
      <StyledListItem>{task}</StyledListItem>
      <StyledRemoveButton onClick={() => removeTodoItem(index)}>Remove</StyledRemoveButton>
      <StyledEditButton onClick={handleEdit}>Edit</StyledEditButton>
      <StyledCheckbox type="checkbox" value="" id={`checkbox-${index}`} />
        </>
      )}
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
