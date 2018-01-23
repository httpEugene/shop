import {
  StyleSheet,
  PixelRatio } from 'react-native';

import colors from '../../config/colors.js';

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
  sortButtonTextUndone: {
    fontSize: 20,
    color: colors.additionalColorOrange,
    backgroundColor: '#9c27b0',
    margin: 5,
  },
  image: {
    margin: 5,
  },
  name: {
    margin: 5,
  },
  user: {
    margin: 5,
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});
