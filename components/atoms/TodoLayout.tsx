import React, { ReactNode } from "react";
import { View } from "react-native";
import styled from '@emotion/native'

interface Props {
  children: ReactNode;
}

const TodoLayoutStyle = styled.View`
  padding: 15px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;


const TodoLayout = (props: Props) => {
  const { children } = props;

  return <TodoLayoutStyle>{children}</TodoLayoutStyle>;
};

export default TodoLayout;
