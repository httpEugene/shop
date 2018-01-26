import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Button from '../button';
import styles from './styles';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
    handleSort() {
      // dispatch(registerRequestAction(data));
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class SortForm extends PureComponent {
  static propTypes = {};

  handleSort = () => {};

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          styleName="sortButton"
          styleTextName="sortButtonTextLast"
          label="Last"
          onPressHandler={() => this.handleSort}
        />

        <Button
          styleName="sortButton"
          styleTextName="sortButtonTextDone"
          label="Done"
          onPressHandler={() => this.handleSort}
        />

        <Button
          styleName="sortButton"
          styleTextName="sortButtonTextUndone"
          label="Undone"
          onPressHandler={() => this.handleSort}
        />
      </View>
    );
  }
}
