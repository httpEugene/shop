import { StyleSheet, PixelRatio } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    display: 'flex'
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

  purchaseContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: colors.secondColor_2,
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
});
