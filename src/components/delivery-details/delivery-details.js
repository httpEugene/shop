import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Button from '../button';
import styles from './styles';
import fetchDeliveryDetails from './actions/delivery-details';
import DeliveryDaysList from './delivery-days-list';

function mapStateToProps(state) {
  return {
    deliveryDetails: state.deliveryDetails && state.deliveryDetails.deliveryDetails,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getDeliveryDetails() {
      dispatch(fetchDeliveryDetails(ownProps.id));
    },
    onBackClick() {
      Actions.main();
    },
    onFeedBackClick() {},
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class DeliveryDetails extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    getDeliveryDetails: PropTypes.func,
    onBackClick: PropTypes.func,
    onFeedBackClick: PropTypes.func,
    deliveryDetails: PropTypes.arrayOf(PropTypes.object),
  };

  componentDidMount() {
    this.props.getDeliveryDetails();
  }

  renderDeliveryDaysList() {
    return this.props.deliveryDetails ? (
      <DeliveryDaysList deliveryDetails={this.props.deliveryDetails} />
    ) : null;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            styleName="backButton"
            styleTextName="backButtonText"
            label="< Back"
            onPressHandler={this.props.onBackClick}
          />
          <Button
            styleName="feedbackButton"
            styleTextName="feedbackButtonText"
            label="Feedback >"
            onPressHandler={this.props.onFeedBackClick}
          />
        </View>

        {this.renderDeliveryDaysList()}
      </View>
    );
  }
}
