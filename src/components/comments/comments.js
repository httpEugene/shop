import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Comment from '../comment';
import styles from './styles';

export default class Comments extends PureComponent {
  static propTypes = {
    comments: PropTypes.array,
  };

  renderComments = () => {
    return this.props.comments.map(comment => (
      <Comment comment={comment.text} key={comment.id} />
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderComments()}
      </View>
    );
  }
}
