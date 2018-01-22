import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Field from '../field';
import Button from '../button';
import styles from './styles';
import OrderItem from './order-item';

import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)

export default class MainOrderList extends PureComponent {

        constructor (props) {
            super(props);
        }

        render() {
            return (
              <View style={styles.container}>
                <OrderItem />
              </View>
            );
        }
}
