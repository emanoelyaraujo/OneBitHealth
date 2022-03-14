import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './src/components/form/form';
import Title from './src/components/title/title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    paddingTop: 60
  },
});
