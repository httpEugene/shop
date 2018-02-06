import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import store from './src/store';
import setupPushNotification from './src/common/services/push-notification';
import Navigator from './src/config/navigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  componentDidMount() {
    setupPushNotification((notification) => {
      Actions[notification.route]();
    });
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}
