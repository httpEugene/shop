import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Field from '../field';
import Button from '../button';
import styles from './styles';
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

export default class ListItem extends PureComponent {
        getDeliveryDetails = () => {
            Actions.deliveryDetails();
        }

        getDetails = () => {
           // Actions.details();
        }

          render() {
            return (
              <View style={styles.listItemContainer}>
                 <Text style={styles.id}>id</Text>
                 <Text style={styles.date}>date</Text>

                 <View style={styles.statusContainer}>
                    <Text style={styles.status}>date</Text>
                 </View>
                 <View style={styles.purchaseContainer}>
                    <Text style={styles.purchaseItem}>item</Text>
                    <Text style={styles.purchaseSumm}>Summ</Text>
                 </View>
                 <View style={styles.buttonContainer}>
                     <Button styleName='details' styleTextName='buttonTextSecond' label='Details' onPressHandler={() => this.getDetails()} />
                     <Button styleName='deliveryDetails' styleTextName='buttonTextSecond' label='Delivery Details' onPressHandler={() => this.getDeliveryDetails()} />
                 </View>
              </View>
            );
  }
}
