import React from "react";
import {CheckBox, View, TouchableOpacity, Button, Text, GestureResponderEvent } from "react-native";
import styled from '@emotion/native'


interface Props {
  text: string;
  isChecked: boolean;
  onClickDelete: () => void;
  onClickTodo: () => void;
}

const ListStyle = styled.TouchableOpacity`
  :not(:first-child) {
    margin-top: 10px;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-color: #222;
  border-bottom-width: 1px;
  padding: 5px 2px;
  cursor: pointer;
`;

const TodoTextStyle = styled.Text`
  margin-left: 5px;
  color: hotpink;
  font-weight: bold;
`;

const DeleteButtonWrapper = styled.View`
  margin-left: auto;
`

const DeleteButtonStyle = styled.Button`
  border: 1px solid #222;
  padding: 5px 10px;
  margin-left: auto;
`;

const TodoListItem = (props: Props) => {
  const { text, isChecked, onClickDelete, onClickTodo } = props;

  const onClickDeleteHandle = (
    event: GestureResponderEvent
  ) => {
    event.stopPropagation();
    event.preventDefault();
    onClickDelete();
  };

  const onClickTodoHandle = (
    event: GestureResponderEvent
  ) => {
    event.stopPropagation();
    event.preventDefault();
    onClickTodo();
  };

  return (
    <ListStyle onPress={onClickTodoHandle} >
      <CheckBox value={isChecked} />
      <TodoTextStyle>{text}</TodoTextStyle>
      <DeleteButtonWrapper>
      <DeleteButtonStyle onPress={onClickDeleteHandle} title="delete" />
      </DeleteButtonWrapper>
    </ListStyle>
  );
};

export default TodoListItem;
