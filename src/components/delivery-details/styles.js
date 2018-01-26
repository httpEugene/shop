import { StyleSheet } from 'react-native';

import colors from '../../config/colors.js';

export default StyleSheet.create({
  container: {
    display: 'flex',
    alignSelf: 'center',
    margin: 10,
    padding: 15,
    width: '95%',
    backgroundColor: colors.secondColorWhite,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  timeStatusRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  date: {
    color: colors.mainColorBlue,
    fontSize: 25,
  },
  time: {
    color: colors.mainColorBlack,
    marginRight: 5,
    fontSize: 18,
  },
  deliveryDay: {
    marginBottom: 20,
  },
  newOrderStatus: {
    color: colors.mainColorBlack,
  },
  orderStatus: {
    color: colors.additionalColorOrange,
  },
  doneOrderStatus: {
    color: colors.additionalColorGgreen,
  },
  status: {
    fontSize: 18,
  },
});
