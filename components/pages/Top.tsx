import React, {useState} from "react";
import { View, Text } from "react-native";
import v4 from "uid";

import TodoList from "../organisms/TodoList";
import AddTodoBar from '../molecules/AddTodoBar'
import Heading from '../atoms/Heading'
import TodoLayout from '../atoms/TodoLayout'

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



const Top = () => {
  const onClickTodo = (id: string) => () => {
    console.log("todo clicked", id);
  };

  const onClickDelete = (id: string) => () => {
    console.log("todo deleted", id);
  };

  const onAddTodo = (text: string) => {
      console.log(text)
  }

  return (
    <TodoLayout>

      <Heading>MAGICAL TODO</Heading>

      <TodoList
        list={stubList}
        onClickTodo={onClickTodo}
        onClickDelete={onClickDelete}
      />

      <AddTodoBar onAddTodo={onAddTodo} />

    </TodoLayout>
  );
};

export default Top;
