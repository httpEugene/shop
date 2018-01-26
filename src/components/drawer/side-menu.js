import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, ListItem, Avatar } from 'react-native-elements';
import styles from './styles';

const mainMenulist = [
  {
    title: 'Shop',
    icon: 'av-timer',
    path: 'main',
  },
  {
    title: 'Notifications',
    icon: 'flight-takeoff',
    path: null,
  },
  {
    title: 'My Orders',
    icon: 'flight-takeoff',
    path: 'orders',
  },
];

const secondMenulist = [
  {
    title: 'Favorites',
    icon: 'av-timer',
    path: null,
  },
  {
    title: 'Watched',
    icon: 'flight-takeoff',
    path: null,
  },
];

export default class SideMenu extends PureComponent {
  navigateTo = (route) => {
    Actions[route]();
  };

  mainListRender = () => {
    return mainMenulist.map(({ title, icon, path }, i) =>
      (title === 'Notifications' ? (
          <ListItem
            key={i}
            title={title}
            leftIcon={{ name: icon }}
            containerStyle={styles.listItem}
            wrapperStyle={{ border: 0 }}
            badge={{
              value: 3,
              textStyle: { color: 'orange' },
              containerStyle: { marginTop: 5 },
            }}
          />) : (
          <ListItem
            key={i}
            title={title}
            leftIcon={{ name: icon }}
            containerStyle={ styles.listItem }
            wrapperStyle={{ border: 0 }}
            onPress={() => this.navigateTo(path)}
          />
      )));
  };

  secondListRender = () => {
    return secondMenulist.map((item, i) => (
      <ListItem key={i} title={item.title} leftIcon={{ name: item.icon }} />
    ));
  };

  render() {
    return (
      <View>
        <View
          style={ styles.avatarBlock }
        >
          <Avatar
            small
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
          <Text style={ styles.userText } >
            User
          </Text>
        </View>
        <List>{this.mainListRender()}</List>

        <List>{this.secondListRender()}</List>

        <List containerStyle={ styles.plainListContainer }>
          <ListItem
            containerStyle={styles.listTypePlain}
            title={'Shops'}
            hideChevron={true}
            onPress={() => this.navigateTo('map')}
          />
          <ListItem
            containerStyle={styles.listTypePlain}
            title={'Logout'}
            hideChevron={true}
          />
        </List>
      </View>
    );
  }
}
