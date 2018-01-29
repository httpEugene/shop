import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, TextInput } from 'react-native';
import { List, Button } from 'react-native-elements';
import { get, post } from '../../common/services/api-service';
import Comment from '../comment';
import styles from './styles';

const savePostUrl = 'https://private-bf0eb-test12906.apiary-mock.com/comment';
const getAllCommentsUrl = 'https://private-bf0eb-test12906.apiary-mock.com/comments/32344';

function mapStateToProps(state) {
  return {
    comments: state.comments && state.comments.comments,
    id: state.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getComments() {
      get(getAllCommentsUrl, 'COMMENTS', dispatch);
    },
    saveComment(data) {
      post(savePostUrl, 'ADD_COMMENT', dispatch, data);
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Comments extends PureComponent {
  static propTypes = {
    comments: PropTypes.array,
    id: PropTypes.number,
    saveComment: PropTypes.func,
    getComments: PropTypes.func,
  };

  state = {
    comment: '',
  };

  onChangeHandler = (comment) => {
    this.setState({
      comment,
    });
  };

  onPressHandler = () => {
    const data = {
      comment: this.state.comment,
      id: this.props.id,
    };

    this.props.saveComment(data);
    this.setState({
      comment: '',
    });
  };

  componentDidMount() {
    this.props.getComments();
  }

  renderComments = () => {
    return (
      <List>
        {this.props.comments && this.props.comments.map((comment, id) => (
          <Comment comment={comment} key={id} />
        ))}
      </List>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            multiline={true}
            style={styles.textArea}
            onChangeText={text => this.onChangeHandler({ text })}
            value={this.state.comment}
          />
        </View>
        <Button
          title='Send comment'
          backgroundColor='#3f51b5'
          onPress={this.onPressHandler}
        />
        {this.renderComments()}
      </View>
    );
  }
}
