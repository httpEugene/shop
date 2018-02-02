import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.secondColorWhite,
  },

  orderContainer: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.secondColorWhite,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  listItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    backgroundColor: colors.secondColorWhite,
  },

  statusContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 5,
  },

  id: {
    color: colors.mainColorBlack,
    fontSize: 16,
    marginTop: 15,
    marginLeft: 10,
  },

  name: {
    color: colors.mainColorBlack,
    fontSize: 24,
    margin: 10,
  },

  date: {
    color: colors.secondColorDarkGray,
    fontSize: 16,
    marginTop: 15,
    marginRight: 10,
  },

  subtitleView: {
    margin: 0,
  },

  image: {
    margin: 0,
  },

  statusText: {
    color: colors.secondColorDarkGray,
    fontSize: 14,
    margin: 10,
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

  productItems: {
    color: colors.secondColorDarkGray,
    fontSize: 18,
    marginTop: 5,
    marginLeft: 30,
  },

  productPrice: {
    color: colors.mainColorBlack,
    fontSize: 20,
    marginTop: 5,
    marginLeft: 30,
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
    marginLeft: 10,
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

  delivery: {
    fontSize: 30,
    color: '#00e5ff',
  },

  deliveryDetails: {
    fontSize: 30,
    color: '#00e5ff',
  },
  containerStyle: {

  },
});
