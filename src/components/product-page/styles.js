import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignSelf: 'center',
    margin: 10,
    padding: 15,
    width: '95%',
    backgroundColor: colors.secondColorWhite,
  },
  title: {
    alignSelf: 'center',
  },
  description: {
    marginTop: 10,
  },
  price: {
    alignSelf: 'center',
    marginTop: 10,
  },
  slider: {
    marginTop: 10,
    height: 300,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
  dot: {
    backgroundColor: colors.secondColorLightGray,
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: colors.secondColorWhite,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  controlButton: {
    fontSize: 40,
    color: colors.secondColorWhite,
  },
});
