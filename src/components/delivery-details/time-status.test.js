import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TimeStatus from './time-status';
import styles from './styles';

Enzyme.configure({ adapter: new Adapter() });

describe('TimeStatus component', () => {
  it('setStatusColor return correct styles for DONE status', () => {
    const props = {
      timeStatus: {
        time: '16:30',
        deliveryStatus: 'DONE',
      },
    };
    const enzymeWrapper = shallow(<TimeStatus {...props} />);
    const expectedStyles = styles.doneOrderStatus;
    expect(enzymeWrapper.instance().setStatusColor(props.timeStatus)).toEqual(expectedStyles);
  });

  it('setStatusColor return correct styles for NEW_ORDER status', () => {
    const props = {
      timeStatus: {
        time: '16:30',
        deliveryStatus: 'NEW_ORDER',
      },
    };
    const enzymeWrapper = shallow(<TimeStatus {...props} />);
    const expectedStyles = styles.newOrderStatus;
    expect(enzymeWrapper.instance().setStatusColor(props.timeStatus)).toEqual(expectedStyles);
  });

  it('setStatusColor return correct styles for other statuses', () => {
    const props = {
      timeStatus: {
        time: '16:30',
        deliveryStatus: 'PLANNED',
      },
    };
    const enzymeWrapper = shallow(<TimeStatus {...props} />);
    const expectedStyles = styles.orderStatus;
    expect(enzymeWrapper.instance().setStatusColor(props.timeStatus)).toEqual(expectedStyles);
  });
});
