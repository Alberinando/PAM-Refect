import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './style';

export default function Title() {
  return (
    <View style={styles.sectionTitle}>
      <StatusBar backgroundColor="#ADD8E6" barStyle={'dark-content'} />
      <Text style={styles.textTitle}>PAM</Text>
    </View>
  );
}
