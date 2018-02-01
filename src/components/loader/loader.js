import React, { PureComponent } from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';

import colors from '../../config/colors';

export default class Loader extends PureComponent {
  render() {
    return (
      <View>
        <ActivityIndicator size="large" color={ colors.mainColorBlue } />
      </View>
    );
  }
}

