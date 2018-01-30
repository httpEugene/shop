import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import TimeStatus from './time-status';

export default class DeliveryDay extends PureComponent {
  static propTypes = {
    deliveryDay: PropTypes.object,
  };

  renderTimeStatusCollection() {
    return this.props.deliveryDay.deliveryStatuses.map(status => (
      <TimeStatus key={status.deliveryStatus} timeStatus={status} />
    ));
  }

  convertStringToLocaleDateString(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  render() {
    const { deliveryDay } = this.props;
    return (
      <View key={deliveryDay.date} style={styles.deliveryDay}>
        <Text style={styles.date}>
          {this.convertStringToLocaleDateString(deliveryDay.date)}
        </Text>
        {this.renderTimeStatusCollection()}
      </View>
    );
  }
}
