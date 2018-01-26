import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './styles';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MainOrderList extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text> Delivery details </Text>
      </View>
    );
  }
}
