import React, { PureComponent } from 'react'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Field from '../field'
import Button from '../button'
import DetailedOrder from './detailed-order'

import styles from './styles'
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

export default class OrderItem extends PureComponent {
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

        <View style={styles.buttonContainer}>

          <Button styleName='details' styleTextName='buttonTextSecond' label='Details'
                  onPressHandler={() => this.getDetails()}/>
          <Button styleName='deliveryDetails' styleTextName='buttonTextSecond' label='Delivery Details'
                  onPressHandler={() => this.getDeliveryDetails()}/>
        </View>

        <DetailedOrder />

      </View>
    )
  }
}
