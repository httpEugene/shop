import React, { PureComponent } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Button, Icon } from 'react-native-elements';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import styles from './styles';

export default class Loader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      textStyle: 'testimonialTextArea',
    };
  }

  onFeedbackChange = (event) => {
    this.setState({
      textValue: event.nativeEvent.text || '',
    });
    this.setEditMode();
  };

  setEditMode = () => {
    this.setState({
      testStyle: 'testimonialTextAreaEditMode',
    });
  };

  handleSubmit = () => {
    this.setState({
      testStyle: 'testimonialTextArea',
    });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.badButton}>
            <FontAwesome style={styles.badButtonIcon}>
              {Icons.thumbsDown}
            </FontAwesome>
            <Text style={styles.badButtonText}>Bad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.goodButton}>
            <FontAwesome style={styles.goodButtonIcon}>
              {Icons.angellist}
            </FontAwesome>
            <Text style={styles.goodButtonText}>Good</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.perfectButton}>
            <FontAwesome style={styles.perfectButtonIcon}>
              {Icons.thumbsUp}
            </FontAwesome>
            <Text style={styles.perfectButtonText}>Perfect</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.testimonialContainer}>
          <View style={styles.testimonialHeader}>
            <Text style={styles.testimonialText}>Testimonial:</Text>
            <View style={styles.editIconContainer}>
              <Icon
                raised
                name="pencil"
                type="font-awesome"
                color="#00bcd4"
                onPress={() => this.setEditMode()}
              />
            </View>
          </View>
          <AutoGrowingTextInput
            value={this.state.textValue}
            onChange={event => this.onFeedbackChange(event)}
            style={styles[this.state.testStyle] || styles.testimonialTextArea}
            placeholder={
              'Write some feedback here. It can be like: "Your service is perfect;)" '
            }
            placeholderTextColor="#66737C"
            maxHeight={100}
            minHeight={45}
            enableScrollToCaret
          />
          <Button
            small
            buttonStyle={styles.sendButtonStyle}
            icon={{
              name: 'squirrel',
              type: 'octicon',
            }}
            title="Send"
            onPress={() => this.handleSubmit()}
          />
        </View>
      </ScrollView>
    );
  }
}
