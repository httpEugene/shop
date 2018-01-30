import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { PropTypes } from 'prop-types';
import Stars from 'react-native-stars';
import styles from './styles';

const fullStar = require('../../images/icons/star-full.png');
const emptyStar = require('../../images/icons/star-empty.png');
const halfStar = require('../../images/icons/star-full.png');

export const defaultOptions = {
  half: false,
  spaceBetweenStars: 4,
  countOfStars: 5,
};

const isHalfOption = ({ half }) => half || defaultOptions.half;
const getSpaceBetweenStars = ({ spacing }) =>
  spacing || defaultOptions.spaceBetweenStars;
const getCountOfStars = ({ count }) => count || defaultOptions.countOfStars;

export default class Rating extends PureComponent {
  static propTypes = {
    changeRating: PropTypes.func,
    options: PropTypes.shape({
      count: PropTypes.number,
      half: PropTypes.boolean,
      spacing: PropTypes.number,
      rating: PropTypes.rating.isRequired,
    }),
  };

  onChangeRatingHandler = (val) => {
    this.props.changeRating && this.props.changeRating(val);
  };

  render() {
    if (!this.props.options || !this.props.options.rating) return null;

    return (
      <View style={styles.stars}>
        <Stars
          half={isHalfOption(this.props.options)}
          rating={this.props.options.rating}
          spacing={getSpaceBetweenStars(this.props.options)}
          count={getCountOfStars(this.props.options)}
          fullStar={fullStar}
          emptyStar={emptyStar}
          halfStar={halfStar}
          update={(val) => {
            this.onChangeRatingHandler(val);
          }}
        />
      </View>
    );
  }
}
