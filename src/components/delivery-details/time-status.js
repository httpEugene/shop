import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import * as statuses from '../../constants/status-constants';

export default class TimeStatus extends PureComponent {
  static propTypes = {
    timeStatus: PropTypes.object,
  };

  setStatusColor(timeStatus) {
    switch (timeStatus.deliveryStatus) {
      case 'DONE':
        return styles.doneOrderStatus;
      case 'NEW_ORDER':
        return styles.newOrderStatus;
      default:
        return styles.orderStatus;
    }
  }

  render() {
    return (
      <View style={styles.timeStatusRow}>
        <Text style={styles.time}>{this.props.timeStatus.time}</Text>
        <Text
          style={[styles.status, this.setStatusColor(this.props.timeStatus)]}
        >
          {statuses[this.props.timeStatus.deliveryStatus]}
        </Text>
      </View>
    );
  }
}
