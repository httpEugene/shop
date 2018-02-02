import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignSelf: 'center',
    padding: 15,
    width: '100%',
    backgroundColor: colors.secondColorWhite,
  },
  title: {},
  description: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  price: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginBottom: 20,
  },
  slider: {
    marginTop: 10,
    height: 300,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
  dot: {
    backgroundColor: colors.secondColorLightGray,
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: colors.secondColorWhite,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  controlButton: {
    fontSize: 40,
    color: colors.secondColorWhite,
  },
  specsTitle: {
    marginBottom: 5,
  },
  table: {
  },
  tableRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingLeft: 10,
  },
  tableCell: {
    width: '50%',
  },
  tableRowBackgroundWhite: {
    backgroundColor: colors.secondColorWhite,
  },
  tableRowBackgroundGrey: {
    backgroundColor: colors.secondColorLightGray,
  },
  characteristic: {
    fontSize: 16,
  },
  characteristicValue: {
    fontSize: 16,
  },
  rating: {
    alignSelf: 'flex-start',
  },
});
