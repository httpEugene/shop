import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text } from 'react-native';

import styles from './styles';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Cart extends PureComponent {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>Order Page</Text>
        </View>
      </ScrollView>
    );
  }
}
