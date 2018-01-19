import React, { PureComponent } from 'react'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Field from '../field'
import Button from '../button'
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

export default class Item extends PureComponent {
  render () {
    return (
      <View style={styles.listItemContainer}>
        <Text>...Item...</Text>
        <Text>Name</Text>
        <Text>Image</Text>
        <Text>Items</Text>
        <Text>Price</Text>
      </View>
    )
  }
}
