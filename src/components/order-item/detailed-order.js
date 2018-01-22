import React, { PureComponent } from 'react'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Field from '../field'
import Button from '../button'
import styles from './styles'
import Item from './order'

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'

function mapStateToProps () {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {}
}

@connect(mapStateToProps, mapDispatchToProps)

export default class ListItem extends PureComponent {
  getDeliveryDetails = () => {
    Actions.deliveryDetails();
  }

  getDetails = () => {
    // Actions.details();
  }

  render () {
    return (
      <View style={styles.container}>
         <View style={styles.listItemContainer}>
            <Text style={styles.id}>id</Text>
            <Text style={styles.date}>date</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>STATUS: </Text>
          <Text style={styles.status}>DONE</Text>
        </View>

        <View style={styles.purchaseContainer}>
          <Text style={styles.purchaseItem}>1 ITEM</Text>
          <Text style={styles.purchaseSumm}>180$</Text>
        </View>

        <Item />

         <View style={styles.statusContainer}>
            <Text style={styles.status}>Shipping</Text>
            <Text style={styles.status}>10$</Text>
         </View>
         <View style={styles.statusContainer}>
            <Text style={styles.status}>Total</Text>
            <Text style={styles.status}>100$</Text>
          </View>

      </View>
    )
  }
}
