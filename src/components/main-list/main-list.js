import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import styles from './styles';
import ListItem from './list-item';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MainList extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ListItem />
      </View>
    );
  }
}
