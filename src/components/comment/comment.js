import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

export default class Comment extends PureComponent {
  static propTypes = {
    comment: PropTypes.string,
  };

  render() {
    return (
      <ListItem
        title={this.props.comment}
      />
    );
  }
}
