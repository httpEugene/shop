import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { List } from 'react-native-elements';
import Comment from '../comment';
import styles from './styles';

export default class Comments extends PureComponent {
  static propTypes = {
    comments: PropTypes.array,
  };

  renderComments = () => {
    return (
      <List>
        {
          this.props.comments.map(comment => (
            <Comment comment={comment.text} key={comment.id} />
          ))
        }
      </List>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            multiline = {true}
            style={styles.textArea}
          />
        </View>
        {this.renderComments()}
      </View>
    );
  }
}
