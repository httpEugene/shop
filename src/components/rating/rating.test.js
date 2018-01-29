import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Stars from 'react-native-stars';
import Enzyme, { shallow } from 'enzyme';
import Component, { defaultOptions } from './rating';

Enzyme.configure({ adapter: new Adapter() });

describe('Rating component', () => {
  describe('Should not render', () => {
    it('Should not render if options are not exist', () => {
      const wrapper = shallow(<Component />);
      expect(wrapper.isEmptyRender()).toBe(true);
    });

    it('Should not render if rating is not exist', () => {
      const props = {
        options: {
          rating: undefined,
        },
      };

      const wrapper = shallow(<Component {...props} />);
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });

  describe('Should render with default option', () => {
    const defaultRating = 5;
    const props = {
      options: {
        rating: defaultRating,
      },
    };

    it('should render with default half value', () => {
      const wrapper = shallow(<Component {...props} />);
      const star = wrapper.find(Stars);

      expect(star.prop('half')).toBe(defaultOptions.half);
    });

    it('should render with default spacing value', () => {
      const wrapper = shallow(<Component {...props} />);
      const star = wrapper.find(Stars);

      expect(star.prop('spacing')).toBe(defaultOptions.spaceBetweenStars);
    });

    it('should render with default spacing value', () => {
      const wrapper = shallow(<Component {...props} />);
      const star = wrapper.find(Stars);

      expect(star.prop('count')).toBe(defaultOptions.countOfStars);
    });
  });

  describe('Should render with passed props option', () => {
    const defaultRating = 5;
    const expectedSpacing = 10;
    const expectedCount = 3;
    const expectedHalf = true;

    const props = {
      options: {
        rating: defaultRating,
        spacing: 10,
        count: 3,
        half: true,
      },
    };

    it('should render with default half value', () => {
      const wrapper = shallow(<Component {...props} />);
      const star = wrapper.find(Stars);

      expect(star.prop('half')).toBe(expectedHalf);
    });

    it('should render with default spacing value', () => {
      const wrapper = shallow(<Component {...props} />);
      const star = wrapper.find(Stars);

      expect(star.prop('spacing')).toBe(expectedSpacing);
    });

    it('should render with default spacing value', () => {
      const wrapper = shallow(<Component {...props} />);
      const star = wrapper.find(Stars);

      expect(star.prop('count')).toBe(expectedCount);
    });
  });
});
