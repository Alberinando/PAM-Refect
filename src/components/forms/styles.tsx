import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  FormContext: {
    flex: 1,
    backgroundColor: '#8ed0a4',
    alignItems: 'center',
    paddingTop: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  sectionTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginBottom: '5%',
  },
  textForm: {
    color: '#11114E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    height: '100%',
  },
  formLabel: {
    color: '#000000',
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#a2e4b8',
    color: '#000000',
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  inputSelect: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#a2e4b8',
    color: '#000000',
    height: 48,
    margin: 12,
    paddingLeft: 10,
  },
  inputDropdown: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#a2e4b8',
    color: '#000000',
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#ADD8E6',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 5,
    marginBottom: 20,
  },
  exhibitionResultImc: {
    width: '100%',
    height: '50%',
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: '#11114E',
    fontWeight: 'bold',
  },
});

export default styles;
