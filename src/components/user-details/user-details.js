import React, { PureComponent } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Avatar, Card, Icon } from 'react-native-elements';

import styles from './styles';

export default class UserDetails extends PureComponent {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Card>
          <View style={styles.header}>
            <Avatar
              large
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              activeOpacity={0.7}
            />
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
          <Text style={styles.label}>NAME:</Text>
          <Text style={styles.infoText}>Kate Wilson</Text>
          <Text style={styles.label}>EMAIL:</Text>
          <Text style={styles.infoText}>kate@gmail.com</Text>
          <Text style={styles.label}>PHONE</Text>
          <Text style={styles.infoText}>+(380) 0932220100</Text>
          <Text style={styles.label}>DELIVERY ADDRESS:</Text>
          <Text style={styles.infoText}>Kiev, Fizkulturi, 30</Text>
          <Text style={styles.infoText}>Kiev, Sportivnaya, 1</Text>
        </Card>
      </ScrollView>
    );
  }
}
