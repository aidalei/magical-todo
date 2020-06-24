import React from 'react';
import Top from './components/pages/Top';
import { StyleSheet, View } from 'react-native';
import 'ress';

export default function App() {
  return (
    <View style={styles.container}>
      <Top />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
