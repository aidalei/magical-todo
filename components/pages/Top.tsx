import React from "react";
import { View, Text } from "react-native";
import { css } from "emotion";
import v4 from "uid";

import TodoList from "../organisms/TodoList";

const stubList = [
  {
    id: v4(),
    text: "stub Todo",
    isDeleted: false,
    isChecked: false,
  },
  {
    id: v4(),
    text: "stub Todo",
    isDeleted: false,
    isChecked: false,
  },
  {
    id: v4(),
    text: "stub Todo",
    isDeleted: false,
    isChecked: true,
  },
  {
    id: v4(),
    text: "stub Todo",
    isDeleted: false,
    isChecked: false,
  },
  {
    id: v4(),
    text: "stub Todo",
    isDeleted: false,
    isChecked: false,
  },
  {
    id: v4(),
    text: "stub Todo",
    isDeleted: false,
    isChecked: false,
  },
];

// TODO React-native?で書き直す


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
const todoLayoutStyle = css`
  padding: 15px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Top = () => {
  const onClickTodo = (id: string) => () => {
    console.log("todo clicked", id);
  };

  const onClickDelete = (id: string) => () => {
    console.log("todo clicked", id);
  };

  return (
    <div className={todoLayoutStyle}>
      <h1>MAGICAL TODO</h1>
      <TodoList
        list={stubList}
        onClickTodo={onClickTodo}
        onClickDelete={onClickDelete}
      />

      <div className={addTodoBarStyle}>
        <input className={addInputStyle} type="text" />
        <button className={addButtonStyle}>add</button>
      </div>
    </div>
  );
};

export default Top;
