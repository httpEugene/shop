import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import TimeStatus from './time-status';
import convertDateToShortUTC from '../../helpers/converters';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class DeliveryDay extends PureComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    deliveryDay: PropTypes.object,
  };

  render() {
    return (
      <View key={this.props.deliveryDay.date} style={styles.deliveryDay}>
        <Text style={styles.date}>
          {convertDateToShortUTC(this.props.deliveryDay.date)}
        </Text>
        {this.props.deliveryDay.deliveryStatuses.map(status => (
          <TimeStatus key={status.deliveryStatus} timeStatus={status} />
        ))}
      </View>
    );
  }
}
