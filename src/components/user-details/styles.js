import { StyleSheet, PixelRatio } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.secondColorWhite,
  },
  editIconContainer: {
    marginTop: 0,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    borderColor: colors.secondColorLightGray,
  },
  label: {
    color: colors.secondColorDarkGray,
    fontSize: 10,
  },
  infoText: {
    color: colors.mainColorBlack,
    fontSize: 24,
    marginRight: 10,
    borderBottomWidth: 3 / PixelRatio.get(),
    borderColor: colors.secondColorLightGray,
    marginBottom: 30,
  },
});
