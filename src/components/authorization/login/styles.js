import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';

export default StyleSheet.create({
  container: {
   paddingTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.mainColorBlue,
  },
  formWrapper: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 30,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  validation: {
    fontSize: 12,
    color: 'green',
  },
  error: {
    color: colors.error,
    fontSize: 14,
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    marginTop: 30,
  },
});
