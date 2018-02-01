import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../config/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.secondColorWhite,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  badButton: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 40,
  },
  badButtonIcon: {
    color: colors.additionalColorPink,
    fontSize: 90,
  },
  badButtonText: {
    color: colors.additionalColorPink,
    fontSize: 20,
  },
  goodButton: {
    marginTop: 40,
  },
  goodButtonIcon: {
    color: colors.additionalColorLightGreen,
    fontSize: 90,
  },
  goodButtonText: {
    color: colors.additionalColorLightGreen,
    fontSize: 20,
  },
  perfectButton: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 20,
  },
  perfectButtonIcon: {
    color: colors.additionalColorLightOrange,
    fontSize: 90,
  },
  perfectButtonText: {
    color: colors.additionalColorLightOrange,
    fontSize: 20,
  },
  testimonialContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  testimonialHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  testimonialText: {
    color: colors.mainColorBlue,
    fontSize: 24,
    marginTop: 80,
    marginRight: 20,
  },
  editIconContainer: {
    marginTop: 70,
  },
  testimonialTextArea: {
    flex: 1,
    color: colors.mainColorBlack,
    fontSize: 20,
    backgroundColor: colors.secondColorWhite,
    padding: 10,
    marginTop: 10,
    textAlignVertical: 'top',
    width: width - 40,
    height: 100,
  },
  testimonialTextAreaEditMode: {
    flex: 1,
    color: colors.mainColorBlack,
    fontSize: 20,
    backgroundColor: colors.secondColorLightGray,
    padding: 10,
    marginTop: 20,
    textAlignVertical: 'top',
    width: width - 40,
    height: 100,
  },
  sendButtonStyle: {
    marginTop: 30,
    backgroundColor: colors.mainColorBlue,
    width: width - 40,
  },
});
