import React, { PureComponent } from 'react';
import MapView from 'react-native-maps';
import { View, Text } from 'react-native';
import styles from './styles';
import markers from './mock-data';

export default class MyApp extends PureComponent {
  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 50.4501,
            longitude: 30.5234,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {markers.map(marker => (
            <MapView.Marker
              coordinate={marker.latlng}
              key={marker.address}
            >
              <MapView.Callout>
                <Text>{marker.address}</Text>
                <Text>{marker.date}</Text>
                <Text>{marker.phone}</Text>
              </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    );
  }
}
