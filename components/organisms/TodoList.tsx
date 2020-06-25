import React from "react";
import { FlatList } from "react-native";
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

const TodoList = (props: Props) => {
  const { list, onClickDelete, onClickTodo } = props;
  return (
      <FlatList
        data={list}
        renderItem={({item}) =>
          !item.isDeleted ? (
            <TodoListItem
              key={item.id}
              onClickDelete={onClickDelete(item.id)}
              onClickTodo={onClickTodo(item.id)}
              text={item.text}
              isChecked={item.isChecked}
            />
          ) : null
        }
      />
  );
};

export default TodoList;
