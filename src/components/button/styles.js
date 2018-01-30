import { StyleSheet, PixelRatio } from 'react-native';

import colors from '~/config/colors';

export default StyleSheet.create({
  button: {
    borderWidth: 1 / PixelRatio.get(),
    borderColor: colors.mainColorBlue,
    borderRadius: 2,
    backgroundColor: colors.mainColorBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  details: {
    borderWidth: 1 / PixelRatio.get(),
    borderColor: colors.mainColorBlue,
    borderRadius: 2,
    backgroundColor: colors.mainColorBlue,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  deliveryDetails: {
    borderWidth: 1 / PixelRatio.get(),
    borderColor: colors.additionalColorLightGreen,
    borderRadius: 2,
    backgroundColor: colors.additionalColorLightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  buttonText: {
    fontSize: 24,
    color: colors.secondColorWhite,
    margin: 10,
  },

  sortButtonTextLast: {
    fontSize: 20,
    color: colors.mainColorBlue,
    margin: 5,
  },

  sortButtonTextDone: {
    fontSize: 20,
    color: colors.additionalColorGgreen,
    margin: 5,
  },

  sortButtonTextUndone: {
    fontSize: 20,
    color: colors.additionalColorOrange,
    margin: 5,
  },

  buttonTextSecond: {
    fontSize: 24,
    color: colors.secondColorWhite,
    margin: 10,
  },

  backButton: {
    backgroundColor: colors.secondColorWhite,
  },

  backButtonText: {
    color: colors.mainColorBlue,
    fontSize: 20,
  },

  feedbackButton: {
    backgroundColor: colors.mainColorBlue,
  },

  feedbackButtonText: {
    fontSize: 20,
    color: colors.secondColorWhite,
    margin: 5,
  },
});
