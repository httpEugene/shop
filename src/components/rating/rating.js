import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { PropTypes } from 'prop-types';
import Stars from 'react-native-stars';
import styles from './styles';

const fullStar = require('../../images/icons/star-full.png');
const emptyStar = require('../../images/icons/star-empty.png');
const halfStar = require('../../images/icons/star-full.png');

export default class SortForm extends PureComponent {
  static propTypes = {
    changeRating: PropTypes.fn,
    options: PropTypes.shape({
      count: PropTypes.number,
      half: PropTypes.boolean,
      spacing: PropTypes.number,
    }),
  };

  onChangeRatingHandler = (val) => {
    this.props.changeRating && this.props.changeRating(val);
  };

  render() {
    const { half, spacing, count } = this.props.options;

    return (
      <View style={styles.stars}>
        <Stars
          half={half || false}
          rating={2.5}
          spacing={spacing || 4}
          count={count || 5}
          fullStar={fullStar}
          emptyStar={emptyStar}
          halfStar={halfStar}
          update={(val) => { this.onChangeRatingHandler(val); }}
        />
      </View>
    );
  }
}
