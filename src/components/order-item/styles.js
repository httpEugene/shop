import {
  StyleSheet,
  PixelRatio,
} from 'react-native';

import colors from '~/config/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: colors.secondColorLightGray,
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
    color: colors.mainColorBlack,
    fontSize: 24,
    margin: 10,
  },

  name: {
    color: colors.mainColorBlack,
    fontSize: 24,
    margin: 10,
  },

  date: {
    color: colors.secondColorDarkGray,
    fontSize: 20,
    margin: 10,
  },

  statusText: {
    color: colors.secondColorDarkGray,
    fontSize: 14,
    margin: 10,
  },

  status: {
    color: colors.additionalColorGgreen,
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
    color: colors.secondColorDarkGray,
    fontSize: 20,
  },

  purchaseSumm: {
    color: colors.mainColorBlue,
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
    color: colors.secondColorDarkGray,
    fontSize: 18,
    margin: 10,
  },

  shippingPrice: {
    color: colors.secondColorDarkGray,
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
    color: colors.mainColorBlue,
    fontSize: 30,
    margin: 10,
  },

  totalPrice: {
    color: colors.mainColorBlue,
    fontSize: 30,
    margin: 10,
  },
});
