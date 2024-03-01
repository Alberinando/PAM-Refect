import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Result from './interface/result';

export default function ResultComponent({name, age, pamResult, Sex}: Result) {
  return (
    <>
      <View style={styles.context}>
        <View style={styles.boxSharebutton}>
          <TouchableOpacity style={styles.shared}>
            <Text style={styles.sharedText}>Share</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Nome: {name}</Text>
        <Text style={styles.age}>Idade: {age}</Text>
        <Text style={styles.sex}>Sexo: {Sex}</Text>
      </View>
      <View style={styles.contextResult}>
        <Text style={styles.pam}>PAM: {pamResult}</Text>
      </View>
    </>
  );
}
