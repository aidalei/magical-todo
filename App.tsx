import React from 'react';
import Top from './components/pages/Top';
import { StyleSheet, View } from 'react-native';
import styled from '@emotion/native'
import 'ress';

const ViewStyle = styled.View`
  background-color: #FFEFD5;
  height: 100%;
`

export default function App() {
  return (
    <ViewStyle>
      <Top />
    </ViewStyle>
  );
}
