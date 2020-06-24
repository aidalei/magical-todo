import React from "react";
import { View, Text } from "react-native";
import { css, cx } from "emotion";
import v4 from "uid";

// TODO React-native?で書き直す

const listContainerStyle = css`
  
`;

const listStyle = css`
  :not(:first-child) {
    margin-top: 10px;
  }
  display: flex;
  align-items: center;
  border-bottom: 1px solid #222;
  padding: 5px 0;
`;

const deleteButtonStyle = css`
  border: 1px solid #222;
  padding: 5px 10px;
  margin-left: auto;
`;

const addTodoBarStyle = css`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
`

const addTodoTextStyle = css`
    margin-left: 5px;
`

const addInputStyle = css`
    border: 1px solid #222;
    width: 80%;
`

const addButtonStyle = css`
    border: 1px solid #222;
    padding: 5px 10px;
    width: 18%;
`
const todoLayoutStyle = css`
    padding: 15px 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Top = () => {
  return (
    <div className={todoLayoutStyle}>
      <p>{v4()}</p>
      <ul className={listContainerStyle}>
        <li className={listStyle}>
          <input type="checkbox" />
          <p className={addTodoTextStyle}>some TODO</p>
          <button className={deleteButtonStyle}>delete</button>
        </li>
        <li className={listStyle}>
          <input type="checkbox" />
          <p  className={addTodoTextStyle}>some TODO</p>
          <button className={deleteButtonStyle}>delete</button>
        </li>
        <li className={listStyle}>
          <input type="checkbox" />
          <p  className={addTodoTextStyle}>some TODO</p>
          <button className={deleteButtonStyle}>delete</button>
        </li>
        <li className={listStyle}>
          <input type="checkbox" />
          <p  className={addTodoTextStyle}>some TODO</p>
          <button className={deleteButtonStyle}>delete</button>
        </li>
        <li className={listStyle}>
          <input type="checkbox" />
          <p  className={addTodoTextStyle}>some TODO</p>
          <button className={deleteButtonStyle}>delete</button>
        </li>
        <li className={listStyle}>
          <input type="checkbox" />
          <p  className={addTodoTextStyle}>some TODO</p>
          <button className={deleteButtonStyle}>delete</button>
        </li>
      </ul>

      <div className={addTodoBarStyle}>
        <input className={addInputStyle} type="text" />
        <button className={addButtonStyle}>add</button>
      </div>
    </div>
  );
};

export default Top;
