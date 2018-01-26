import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

export default class Comment extends PureComponent {
  static propTypes = {
    comment: PropTypes.string,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.comment}</Text>
      </View>
    );
  }
}
