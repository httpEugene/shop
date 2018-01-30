import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup } from 'react-native-elements';
import styles from './styles';


function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
    handleSort() {
      // dispatch(registerRequestAction(data));
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class SortForm extends PureComponent {
  static propTypes = {};
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }

  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  render() {
    const buttons = ['last', 'Done', 'Undone'];
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={styles.containerStyle}
      />
    );
  }
}
