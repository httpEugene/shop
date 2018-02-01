import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

export default class SpecsTable extends PureComponent {
  static propTypes = {
    specs: PropTypes.arrayOf(PropTypes.shape({
      characteristic: PropTypes.string,
      value: PropTypes.string,
    })),
  };

  getRowBackgroundColor(index) {
    return index % 2
      ? styles.tableRowBackgroundWhite
      : styles.tableRowBackgroundGrey;
  }

  renderTableRow({ characteristic, value }, index) {
    return (
      <View
        key={index}
        style={[styles.tableRow, this.getRowBackgroundColor(index)]}
      >
        <View style={styles.tableCell}>
          <Text style={styles.characteristic}>{characteristic}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.characteristicValue}>{value}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.table}>
        {this.props.specs.map(this.renderTableRow.bind(this))}
      </View>
    );
  }
}
