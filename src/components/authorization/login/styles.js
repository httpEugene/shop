import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainColorBlue,
  },
  formWrapper: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 30,
  },
  buttonContainer: {
    width: '100%',
  },
  validation: {
    fontSize: 12,
    color: 'green',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
});
