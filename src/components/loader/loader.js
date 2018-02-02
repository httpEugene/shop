import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export default class Loader extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: 'https://loading.io/spinners/coolors/lg.palette-rotating-ring-loader.gif',
          }}
        />
      </View>
    );
  }
}
