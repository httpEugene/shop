import React, { PureComponent } from 'react';
import { ScrollView, View, Image } from 'react-native';
import {
  Text,
  Button,
  Badge,
  ButtonGroup,
  Card,
  Divider,
  FormInput,
  FormLabel,
  FormValidationMessage,
  Icon,
  List,
  ListItem,
  PricingCard,
  Rating,
  SearchBar,
  Tile,
} from 'react-native-elements';

import styles from './styles';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn1',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn2',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn3',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn4',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn5',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn6',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
];

export default class UiExample extends PureComponent {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2,
      test: '',
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  someFunction = () => {};

  ratingCompleted = (rating) => {
    console.log('Rating ', rating);
  };

  toggleDrawer = () => {
    console.log('....toggleDrawer....');
    this._drawer.open();
  };

  // closeControlPanel = () => {
  //   this._drawer.close();
  //   Actions.refresh({key: 'drawer', open: false });
  // };
  // openControlPanel = () => {
  //   console.log('....toggleDrawer....');
  //   this.setState({
  //     test: 'open',
  //   });
  //
  //   Actions.refresh({key: 'drawer', open: true });
  //   //this._drawer.open();
  // };

  render() {
    const buttons = ['Hello', 'World', 'Buttons'];
    const { selectedIndex } = this.state;

    return (
      <ScrollView>

        <Tile
          imageSrc={{
            uri:
              'http://geeksnation.org/wp-content/uploads/2016/10/Beautiful-Girl.jpg',
          }}
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
          featured
          caption="Some Caption Text"
        />

        <Text h1>Heading 1</Text>
        <Text h2>Heading 2</Text>
        <Text h3>Heading 3</Text>
        <Text h4>Heading 4</Text>

        <Badge containerStyle={{ backgroundColor: 'violet' }}>
          <Text>User 1</Text>
        </Badge>

        <Badge
          onPress={() => {
            console.log('pressed');
          }}
          value="5"
        />

        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 100 }}
        />

        <PricingCard
          color="#4f9deb"
          title="Free"
          price="$0"
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />

        <Button title="BUTTON" buttonStyle={styles.sortButtonTextUndone} />

        <Button raised icon={{ name: 'cached' }} title="BUTTON WITH ICON" />

        <Button
          large
          iconRight={{ name: 'code' }}
          title="LARGE WITH RIGHT ICON"
        />

        <Button
          large
          icon={{ name: 'envira', type: 'font-awesome' }}
          title="LARGE WITH ICON TYPE"
        />

        <Button
          large
          icon={{ name: 'squirrel', type: 'octicon' }}
          title="OCTICON"
          buttonStyle={styles.sortButtonTextUndone}
        />

        <Divider style={{ backgroundColor: 'blue' }} />

        <Card title="CARD WITH DIVIDER">
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>

        <Card containerStyle={{ padding: 0 }}>
          {users.map((u, i) => {
            return (
              <ListItem
                key={i}
                roundAvatar
                title={u.name}
                avatar={{ uri: u.avatar }}
              />
            );
          })}
        </Card>

        <Card
          title="HELLO WORLD"
          image={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure.
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor="#03A9F4"
            fontFamily="Lato"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>

        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={() => this.someFunction} />
        <FormValidationMessage>Error message</FormValidationMessage>

        <FormLabel>Address</FormLabel>
        <FormInput onChangeText={() => this.someFunction} />
        <FormValidationMessage>Error message</FormValidationMessage>

        <FormLabel>Phone</FormLabel>
        <FormInput onChangeText={() => this.someFunction} />
        <FormValidationMessage>Error message</FormValidationMessage>

        <Icon name="rowing" />

        <Icon name="g-translate" color="#00aced" />

        <Icon name="sc-telegram" type="evilicon" color="#517fa4" />

        <Icon
          reverse
          name="ios-american-football"
          type="ionicon"
          color="#517fa4"
        />

        <Icon
          raised
          name="heartbeat"
          type="font-awesome"
          color="#f50"
          onPress={() => console.log('hello')}
        />

        <List containerStyle={{ marginBottom: 20 }}>
          {list.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{ uri: l.avatar_url }}
              key={i}
              title={l.name}
            />
          ))}
        </List>

        <List>
          <ListItem
            roundAvatar
            title="Limited supply! Its like digital gold!"
            subtitle={
              <View style={styles.subtitleView}>
                <Image
                  source={{
                    uri:
                      'https://www.zappas.co.uk/files/2013/01/five-stars.png',
                  }}
                  style={styles.ratingImage}
                />
                <Text style={styles.ratingText}>5 months ago</Text>
              </View>
            }
            avatar={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            }}
          />
        </List>

        <Rating
          showRating
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />

        <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={3.6}
          readonly
          imageSize={40}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />

        <Rating
          type="heart"
          ratingCount={3}
          fractions={2}
          startingValue={1.57}
          imageSize={40}
          onFinishRating={this.ratingCompleted}
          showRating
          style={{ paddingVertical: 10 }}
        />

        <SearchBar
          onChangeText={() => this.someMethod}
          onClearText={() => this.someMethod}
          placeholder="Type Here..."
        />

        <SearchBar
          noIcon
          onChangeText={() => this.someMethod}
          onClearText={() => this.someMethod}
          placeholder="Type Here..."
        />

        <SearchBar
          round
          onChangeText={() => this.someMethod}
          onClearText={() => this.someMethod}
          placeholder="Type Here..."
        />

        <SearchBar
          lightTheme
          onChangeText={() => this.someMethod}
          onClearText={() => this.someMethod}
          placeholder="Type Here..."
        />

        <SearchBar
          lightTheme
          onChangeText={() => this.someMethod}
          onClearText={() => this.someMethod}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder="Type Here..."
        />
      </ScrollView>
    );
  }
}
