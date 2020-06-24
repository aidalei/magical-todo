import React from "react";
import { css } from "emotion";
import TodoListItem from "../molecules/TodoListItem";

interface List {
  id: string;
  text: string;
  isDeleted: boolean;
  isChecked: boolean;
}

interface Props {
  list: Array<List>;
  onClickTodo: (id: string) => () => void;
  onClickDelete: (id: string) => () => void;
}

const listContainerStyle = css``;

const TodoList = (props: Props) => {
  const { list, onClickDelete, onClickTodo } = props;
  return (
    <ul className={listContainerStyle}>
      {list.map(({ id, text, isChecked, isDeleted }) =>
        !isDeleted ? (
          <TodoListItem
            key={id}
            onClickDelete={onClickDelete(id)}
            onClickTodo={onClickTodo(id)}
            text={text}
            isChecked={isChecked}
          />
        ) : null
      )}
    </ul>
  );
};

export default TodoList;
