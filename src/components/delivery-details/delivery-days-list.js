import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import DeliveryDay from './delivery-day';

function mapStateToProps(state) {
  return {
    deliveryDetails: state.deliveryDetails,
  };
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class DeliveryDaysList extends PureComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    deliveryDetails: PropTypes.arrayOf(Object),
  };

  render() {
    return (
      <View>
        {this.props.deliveryDetails
          .map(item => <DeliveryDay key={item.date} deliveryDay={item} />)}
      </View>
    );
  }
}
