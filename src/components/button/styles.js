import {
    StyleSheet,
    PixelRatio
    } from 'react-native';

import variables from '../../config/variables.js';

export default StyleSheet.create({
  button: {
    borderWidth: 1/PixelRatio.get(),
    borderColor: variables.mainColor_1,
    borderRadius: 10,
    backgroundColor: variables.mainColor_1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  details: {
    borderWidth: 1/PixelRatio.get(),
    borderColor: variables.mainColor_1,
    borderRadius: 10,
    backgroundColor: variables.mainColor_1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },

  deliveryDetails: {
    borderWidth: 1/PixelRatio.get(),
    borderColor: variables.additionalColor_4,
    borderRadius: 10,
    backgroundColor: variables.additionalColor_4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },

  buttonText: {
    fontSize: 24,
    color: variables.secondColor_3,
    margin: 10
  },
  buttonTextSecond: {
    fontSize: 24,
    color: variables.secondColor_3,
    margin: 10
  }
});
