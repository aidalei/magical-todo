import React, { ReactNode } from "react";
import { css } from "emotion";

interface Props {
  children: ReactNode;
}

const todoLayoutStyle = css`
  padding: 15px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TodoLayout = (props: Props) => {
  const { children } = props;


  return <div className={todoLayoutStyle}>{children}</div>;
};

export default TodoLayout;
