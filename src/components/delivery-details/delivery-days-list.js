import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import DeliveryDay from './delivery-day';

export default class DeliveryDaysList extends PureComponent {
  static propTypes = {
    deliveryDetails: PropTypes.arrayOf(Object),
  };

  renderDeliveryDayCollection() {
    return this.props.deliveryDetails.map(item => (
      <DeliveryDay key={item.date} deliveryDay={item} />
    ));
  }

  render() {
    return <View>{this.renderDeliveryDayCollection()}</View>;
  }
}
