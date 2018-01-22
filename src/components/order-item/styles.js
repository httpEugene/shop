import {
  StyleSheet,
  PixelRatio,
} from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: colors.secondColor_2,
  },

  listItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },

  statusContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 5,
  },

  id: {
    color: colors.mainColor_black,
    fontSize: 24,
    margin: 10,
  },

  name: {
    color: colors.mainColor_black,
    fontSize: 24,
    margin: 10,
  },

  date: {
    color: colors.secondColor_darkGray,
    fontSize: 20,
    margin: 10,
  },

  statusText: {
    color: colors.secondColor_darkGray,
    fontSize: 14,
    margin: 10,
  },

  status: {
    color: colors.additionalColor_1,
    fontSize: 18,
    margin: 10,
  },

  purchaseContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },

  purchaseItem: {
    color: colors.secondColor_darkGray,
    fontSize: 20,
  },

  purchaseSumm: {
    color: colors.mainColor_blue,
    fontSize: 24,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  delivery: {
    fontSize: 30,
    color: '#00e5ff',
  },

  deliveryDetails: {
    fontSize: 30,
    color: '#00e5ff',
  },

  shippingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 5,
  },

  shippingText: {
    color: colors.secondColor_darkGray,
    fontSize: 18,
    margin: 10,
  },

  shippingPrice: {
    color: colors.secondColor_darkGray,
    fontSize: 18,
    margin: 10,
  },

  totalContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },

  totalText: {
    color: colors.mainColor_blue,
    fontSize: 30,
    margin: 10,
  },

  totalPrice: {
    color: colors.mainColor_blue,
    fontSize: 30,
    margin: 10,
  },
});
