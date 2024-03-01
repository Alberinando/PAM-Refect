import React, {useState, useRef} from 'react';
import {
  TextInput,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import Styles from './styles';
import ResultComponent from '../results';
import {SelectList} from 'react-native-dropdown-select-list';

function Forms(): React.JSX.Element {
  const Age = useRef(null);
  const Pas = useRef(null);
  const Pad = useRef(null);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [pas, setPas] = useState<string>('');
  const [pad, setPad] = useState<string>('');
  const [pam, setPam] = useState<string>('');
  const [textButton, setTextButton] = useState<string>('Calcular');
  const [selected, setSelected] = useState('');
  const [nameError, setNameError] = useState<string>('');
  const [ageError, setAgeError] = useState<string>('');
  const [pasError, setPasError] = useState<string>('');
  const [padError, setPadError] = useState<string>('');
  const [sexError, setSexError] = useState<string>('');

  const data = [
    {key: '1', value: 'Homem Cis'},
    {key: '2', value: 'Mulher Cis'},
    {key: '3', value: 'Homem Trans'},
    {key: '4', value: 'Mulher Trans'},
    {key: '5', value: 'Não Binário'},
  ];

  const focusNextInput = (nextInputRef: any) => {
    nextInputRef.current.focus();
  };

  const handleKeyPress = (key: string) => {
    if (key === 'Ok') {
      Keyboard.dismiss();
    }
  };

  function calc() {
    let pasFormt = parseInt(pas.replace(',', '.'), 10);
    let padFormt = parseInt(pad.replace(',', '.'), 10);
    let PAM = ((pasFormt + 2 * padFormt) / 3).toFixed(0).toString();
    setPam(PAM);
  }

  function validation() {
    setNameError(name ? '' : 'Nome é obrigatório');
    setAgeError(age ? '' : 'Idade é obrigatória');
    setPasError(pas ? '' : 'PAS é obrigatório');
    setPadError(pad ? '' : 'PAD é obrigatório');
    setSexError(selected ? '' : 'Sexo é obrigatório');

    if (name && age && pas && pad && selected) {
      calc();
      setTextButton('Calcular Novamente');
      if (textButton === 'Calcular Novamente') {
        setName('');
        setAge('');
        setPad('');
        setPas('');
        setPam('');
        setTextButton('Calcular');
      }
    } else {
      setPam('');
      setTextButton('Calcular');
    }
  }

  return (
    <>
      <View style={Styles.FormContext}>
        {pam === '' ? (
          <Pressable onPress={Keyboard.dismiss} style={Styles.form}>
            <View style={Styles.sectionTitle}>
              <Text style={Styles.textForm}>Coleta de dados</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={Styles.formLabel}>Nome:</Text>
              <TextInput
                style={Styles.input}
                returnKeyType="next"
                onSubmitEditing={() => focusNextInput(Age)}
                blurOnSubmit={false}
                onKeyPress={({nativeEvent}) => handleKeyPress(nativeEvent.key)}
                onChangeText={setName}
                value={name}
                placeholder="Nome"
                keyboardType="default"
              />
              {nameError ? (
                <Text style={Styles.errorMessage}>{nameError}</Text>
              ) : null}
              <Text style={Styles.formLabel}>Idade:</Text>
              <TextInput
                style={Styles.input}
                ref={Age}
                onSubmitEditing={() => focusNextInput(Pas)}
                blurOnSubmit={false}
                onKeyPress={({nativeEvent}) => handleKeyPress(nativeEvent.key)}
                onChangeText={setAge}
                value={age}
                placeholder="Idade"
                keyboardType="numeric"
              />
              {ageError ? (
                <Text style={Styles.errorMessage}>{ageError}</Text>
              ) : null}
              <Text style={Styles.formLabel}>Sexo:</Text>
              <SelectList
                data={data}
                boxStyles={Styles.inputSelect}
                dropdownStyles={Styles.inputDropdown}
                setSelected={(val: any) => setSelected(val)}
                search={false}
                save="value"
                placeholder="Selecionar"
              />
              {sexError ? (
                <Text style={Styles.errorMessage}>{sexError}</Text>
              ) : null}
              <Text style={Styles.formLabel}>PAS:</Text>
              <TextInput
                style={Styles.input}
                onSubmitEditing={() => focusNextInput(Pad)}
                blurOnSubmit={false}
                onKeyPress={({nativeEvent}) => handleKeyPress(nativeEvent.key)}
                ref={Pas}
                onChangeText={setPas}
                value={pas}
                placeholder="PAS (mmHg):"
                keyboardType="numeric"
              />
              {pasError ? (
                <Text style={Styles.errorMessage}>{pasError}</Text>
              ) : null}
              <Text style={Styles.formLabel}>PAD:</Text>
              <TextInput
                style={Styles.input}
                ref={Pad}
                returnKeyType="done"
                onSubmitEditing={() => Keyboard.dismiss()}
                onKeyPress={({nativeEvent}) => handleKeyPress(nativeEvent.key)}
                onChangeText={setPad}
                value={pad}
                placeholder="PAD(mmHg):"
                keyboardType="numeric"
              />
              {padError ? (
                <Text style={Styles.errorMessage}>{padError}</Text>
              ) : null}
              <TouchableOpacity
                style={Styles.buttonCalculator}
                onPress={() => validation()}>
                <Text style={Styles.textButtonCalculator}>{textButton}</Text>
              </TouchableOpacity>
            </ScrollView>
          </Pressable>
        ) : (
          <View style={Styles.exhibitionResultImc}>
            <ResultComponent
              name={name}
              age={age}
              Sex={selected}
              pamResult={pam}
            />
            <TouchableOpacity
              onPress={() => validation()}
              style={Styles.buttonCalculator}>
              <Text style={Styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
}

export default Forms;
