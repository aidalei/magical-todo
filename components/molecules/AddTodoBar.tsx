import React, { useState } from "react";
import { css } from "emotion";

const addTodoBarStyle = css`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

const addInputStyle = css`
  border: 1px solid #222;
  width: 80%;
`;

const addButtonStyle = css`
  border: 1px solid #222;
  padding: 5px 10px;
  width: 18%;
`;

interface Props {
  onAddTodo: (text: string) => void;
}

const AddTodoBar = (props: Props) => {
  const {  onAddTodo } = props;
  const [currentText, updateText] = useState('');

  const onUpdateTextHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    updateText(event.target.value);
  };

  const onAddTodoHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onAddTodo(currentText);
    updateText('');
  };

  return (
    <div className={addTodoBarStyle}>
      <input
        value={currentText}
        placeholder="TODO"
        onChange={onUpdateTextHandle}
        className={addInputStyle}
        type="text"
      />
      <button onClick={onAddTodoHandle} className={addButtonStyle}>
        add
      </button>
    </div>
  );
};

export default AddTodoBar;
