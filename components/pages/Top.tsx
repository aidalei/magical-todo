import React, { useState } from "react";
import { View, Text } from "react-native";
import v4 from "uid";

import TodoList from "../organisms/TodoList";
import AddTodoBar from "../molecules/AddTodoBar";
import Heading from "../atoms/Heading";
import TodoLayout from "../atoms/TodoLayout";

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

interface List {
    id: string;
    text: string;
    isDeleted: boolean;
    isChecked: boolean;
}

const createNewTodo = (text: string) => ({
    id: v4(),
    text: text,
    isDeleted: false,
    isChecked: false,
})

const Top = () => {
  const [list, updateList] = useState<Array<List | never>>([]);
  const onClickTodo = (id: string) => () => {
    console.log("todo clicked", id);
    const newList = list.map(item => {
        if (item.id !== id) return item
        console.log(item)
        return {
            ...item,
            isChecked: !item.isChecked
        }
    })
    updateList(newList);
  };

  const onClickDelete = (id: string) => () => {
    console.log("todo deleted", id);
    const newList = list.map(item => {
        if (item.id !== id) return item
        return {
            ...item,
            isDeleted: true
        }
    })
    updateList(newList);
  };

  const onAddTodo = (text: string) => {
    console.log(text);
    updateList([...list, createNewTodo(text)])
  };

  return (
    <TodoLayout>
      <Heading>MAGICAL TODO</Heading>

      <TodoList
        list={list}
        onClickTodo={onClickTodo}
        onClickDelete={onClickDelete}
      />

      <AddTodoBar onAddTodo={onAddTodo} />
    </TodoLayout>
  );
};

export default Top;
