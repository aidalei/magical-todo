import React from "react";
import { css } from "emotion";

interface Props {
  text: string;
  isChecked: boolean;
  onClickDelete: () => void;
  onClickTodo: () => void;
}

const listStyle = css`
  :not(:first-child) {
    margin-top: 10px;
  }
  display: flex;
  align-items: center;
  border-bottom: 1px solid #222;
  padding: 5px 0;
`;

const addTodoTextStyle = css`
  margin-left: 5px;
`;

const deleteButtonStyle = css`
  border: 1px solid #222;
  padding: 5px 10px;
  margin-left: auto;
`;

const TodoListItem = (props: Props) => {
  const { text, isChecked, onClickDelete, onClickTodo } = props;

  const onClickDeleteHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onClickDelete();
  };

  const onClickTodoHandle = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    onClickTodo();
  };

  return (
    <li onClick={onClickTodoHandle} className={listStyle}>
      <input type="checkbox" defaultChecked={isChecked} />
      <p className={addTodoTextStyle}>{text}</p>
      <button onClick={onClickDeleteHandle} className={deleteButtonStyle}>
        delete
      </button>
    </li>
  );
};

export default TodoListItem;
