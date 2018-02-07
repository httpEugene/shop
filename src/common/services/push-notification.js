import PushNotification from 'react-native-push-notification';

const setupPushNotification = (handleNotification) => {
  PushNotification.configure({
    onNotification: (notification) => {
      handleNotification(notification);
    },
  });

  return PushNotification;
};

export default setupPushNotification;
