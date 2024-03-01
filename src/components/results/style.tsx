import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  context: {
    flex: 1,
    marginTop: 5,
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'flex-start',
    width: '100%',
  },
  contextResult: {
    width: '85%',
    marginHorizontal: 20.9,
    marginBottom: -180,
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  result: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#11114E',
  },
  name: {
    fontSize: 20,
    color: '#11114E',
    fontWeight: 'bold',
  },
  age: {
    fontSize: 20,
    color: '#11114E',
    fontWeight: 'bold',
  },
  pam: {
    fontSize: 25,
    color: '#11114E',
    fontWeight: 'bold',
  },
  sex: {
    fontSize: 20,
    color: '#11114E',
    fontWeight: 'bold',
  },
  boxSharebutton: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  shared: {
    backgroundColor: '#1877f2',
    borderRadius: 50,
    paddingBottom: 5,
    marginRight: 25,
    paddingTop: 5,
    alignItems: 'center',
  },
  sharedText: {
    color: '#ffffff',
    fontWeight: 'bold',
    paddingHorizontal: 30,
    alignItems: 'flex-end',
  },
});

export default styles;
