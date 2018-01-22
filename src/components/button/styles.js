import { StyleSheet, PixelRatio } from 'react-native';

export default StyleSheet.create({
  button: {
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#995aba',
    borderRadius: 10,
    backgroundColor: '#995aba',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    margin: 10,
  },
  buttonTextSecond: {
    fontSize: 24,
    color: '#00e5ff',
    margin: 10,
  },
});
