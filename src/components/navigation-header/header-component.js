import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import LeftNavigationComponent from './left-navigation-header-component';
import RightNavigationComponent from './right-navigation-header-component';

export default class rightNavigationComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={
            <LeftNavigationComponent route={'drawer'} />
          }
          centerComponent={{ text: this.props.title, style: { color: '#fff' } }}
          rightComponent={
            <RightNavigationComponent route={'cart'} />
          }
        />
      </View>
    );
  }
}
