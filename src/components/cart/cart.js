import React, { PureComponent } from 'react';
import { ScrollView, View, Text } from 'react-native';

import styles from './styles';

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
