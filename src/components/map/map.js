import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import MapView from 'react-native-maps';
import { View, Text } from 'react-native';
import styles from './styles';
import fetchMapAction from './actions';

function mapStateToProps(state) {
  return {
    shopsData: state.shopsData ? state.shopsData.shops : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMapData: () => {
      dispatch(fetchMapAction());
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MyApp extends PureComponent {
  static propTypes = {
    fetchMapData: PropTypes.func,
    shopsData: PropTypes.array,
  };

  componentDidMount() {
    this.props.fetchMapData();
  }

  renderPins = () => {
    if (!this.props.shopsData) return null;

    return this.props.shopsData.map(marker => (
      <MapView.Marker coordinate={marker.latlng} key={marker.address}>
        <MapView.Callout>
          <Text>{marker.address}</Text>
          <Text>{marker.date}</Text>
          <Text>{marker.phone}</Text>
        </MapView.Callout>
      </MapView.Marker>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 50.4501,
            longitude: 30.5234,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {this.renderPins()}
        </MapView>
      </View>
    );
  }
}
