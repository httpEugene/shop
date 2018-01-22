import React from 'react';
import {
    StyleSheet,
    PixelRatio
} from 'react-native';

import variables from '../../config/variables.js';

export default StyleSheet.create({
  container: {
    display: 'flex',
    borderWidth: 1/PixelRatio.get(),
    borderColor: variables.secondColor_2
  },

  listItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5
  },

   statusContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 5,
  },

   purchaseContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    borderWidth: 1/PixelRatio.get(),
    borderColor: variables.secondColor_2
  },

  id: {
    color: variables.mainColor_2,
    fontSize: 24,
    margin: 10,
  },

  name: {
    color: variables.mainColor_2,
    fontSize: 24,
    margin: 10,
  },

  date: {
    color: variables.secondColor_1,
    fontSize: 20,
    margin: 10,
  },

  statusText: {
    color: variables.secondColor_1,
    fontSize: 14,
    margin: 10,
  },

  status: {
    color: variables.additionalColor_1,
    fontSize: 18,
    margin: 10,
  },

  purchaseContainer: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between',
     margin: 5
  },

  purchaseItem: {
    color: variables.secondColor_1,
    fontSize: 20
  },

  purchaseSumm: {
    color: variables.mainColor_1,
    fontSize: 24
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  delivery: {
    fontSize: 30,
    color: "#00e5ff"
  },

  deliveryDetails: {
    fontSize: 30,
    color: "#00e5ff"
  }
});
