import { StyleSheet } from 'react-native';

import colors from '../../../config/colors';

export default StyleSheet.create({
  orderContainer: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.secondColorWhite,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  subtitleView: {
    margin: 0,
  },

  status: {
    color: colors.additionalColorGgreen,
    fontSize: 14,
    margin: 10,
  },

  productListStyle: {
    marginLeft: 10,
  },

  productName: {
    color: colors.mainColorBlack,
    fontSize: 20,
    marginLeft: 30,
  },

  purchaseContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },

  productItems: {
    color: colors.secondColorDarkGray,
    fontSize: 18,
    marginTop: 5,
    marginLeft: 30,
  },

  purchaseSumm: {
    color: colors.mainColorBlack,
    fontSize: 24,
    marginRight: 10,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
