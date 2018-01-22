import {
  StyleSheet,
  PixelRatio } from 'react-native';

import colors from '../../config/colors.js';

export default StyleSheet.create({
  button: {
    borderWidth: 1 / PixelRatio.get(),
    borderColor: colors.mainColor_blue,
    borderRadius: 2,
    backgroundColor: colors.mainColor_blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  details: {
    borderWidth: 1 / PixelRatio.get(),
    borderColor: colors.mainColor_blue,
    borderRadius: 2,
    backgroundColor: colors.mainColor_blue,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  deliveryDetails: {
    borderWidth: 1 / PixelRatio.get(),
    borderColor: colors.additionalColor_4,
    borderRadius: 2,
    backgroundColor: colors.additionalColor_4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  buttonText: {
    fontSize: 24,
    color: colors.secondColor_3,
    margin: 10,
  },

  sortButtonTextLast: {
    fontSize: 20,
    color: colors.mainColor_blue,
    margin: 5,
  },

  sortButtonTextDone: {
    fontSize: 20,
    color: colors.additionalColor_1,
    margin: 5,
  },

  sortButtonTextUndone: {
    fontSize: 20,
    color: colors.additionalColor_2,
    margin: 5,
  },

  buttonTextSecond: {
    fontSize: 24,
    color: colors.secondColor_3,
    margin: 10,
  },
});
