import React, { useState } from "react";
import {TextInput, View, Button, NativeSyntheticEvent, NativeTouchEvent , Alert} from 'react-native'
import styled from '@emotion/native'

const AddTodoBarStyle = styled.View`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AddInputStyle = styled.TextInput`
  border: 2px solid hotpink;
  outline: hotpink;
  border-radius: 5px;
  width: 80%;
  padding: 5px 10px;
  background-color: white;
`;

const AddButtonStyle = styled.Button`
  border: 1px solid #222;
  padding: 5px 10px;
  width: 18%;
  border-radius: 5px;
`;

interface Props {
  onAddTodo: (text: string) => void;
}

const AddTodoBar = (props: Props) => {
  const {  onAddTodo } = props;
  const [currentText, updateText] = useState('');

  const onUpdateTextHandle = (text: string) => {
    updateText(text);
  };

  const onAddTodoHandle = (
    event: NativeSyntheticEvent<NativeTouchEvent>
  ) => {
    event.preventDefault();
    if(!currentText) return
    onAddTodo(currentText);
    updateText('');
  };

  return (
    <AddTodoBarStyle>
      <AddInputStyle
        value={currentText}
        placeholder="TODO"
        onChangeText={onUpdateTextHandle}
      />
      <AddButtonStyle onPress={onAddTodoHandle} title="add" />
    </AddTodoBarStyle>
  );
};

export default AddTodoBar;
