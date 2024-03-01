import {StyleSheet, View} from 'react-native';
import React from 'react';
import Forms from './src/components/forms/Forms';
import Title from './src/components/title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Forms />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    paddingTop: 20,
  },
});
