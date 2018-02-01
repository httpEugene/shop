import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SpecsTable from './specs-table';
import styles from './styles';

Enzyme.configure({ adapter: new Adapter() });

describe('SpecsTable component', () => {
  const props = {
    specs: [
      {
        characteristic: 'Material',
        value: 'Plastic',
      },
      {
        characteristic: 'Color',
        value: 'Black',
      },
      {
        characteristic: 'Brand',
        value: 'Samsung',
      },
    ],
  };

  let enzymeWrapper;

  beforeEach(() => {
    enzymeWrapper = shallow(<SpecsTable {...props} />);
  });

  it('Should check getRowBackgroundColor returns correct styles for odd index', () => {
    const expectedStyles = styles.tableRowBackgroundWhite;
    const index = 1;
    expect(enzymeWrapper.instance().getRowBackgroundColor(index)).toEqual(expectedStyles);
  });

  it('Should check getRowBackgroundColor returns correct styles for even index', () => {
    const expectedStyles = styles.tableRowBackgroundGrey;
    const index = 2;
    expect(enzymeWrapper.instance().getRowBackgroundColor(index)).toEqual(expectedStyles);
  });
});
