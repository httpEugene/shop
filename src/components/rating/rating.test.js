import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Stars from 'react-native-stars';
import Enzyme, { shallow } from 'enzyme';
import Component, { defaultOptions } from './rating';

Enzyme.configure({ adapter: new Adapter() });

describe('Rating component', () => {
  const STARS_PROPS = {
    HALF: 'half',
    SPACING: 'spacing',
    COUNT: 'count',
  };

  describe('Should not render', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Component />);
    });

    it('Should not render if options are not exist', () => {
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });

  describe('Should render with default option', () => {
    const propsRating = 5;
    const props = {
      options: {
        rating: propsRating,
      },
    };

    let wrapper;
    let star;

    beforeEach(() => {
      wrapper = shallow(<Component {...props} />);
      star = wrapper.find(Stars);
    });

    it('Should render with default half value', () => {
      expect(star.prop(STARS_PROPS.HALF)).toBe(defaultOptions.half);
    });

    it('Should render with default spacing value', () => {
      expect(star.prop(STARS_PROPS.SPACING)).toBe(defaultOptions.spaceBetweenStars);
    });

    it('Should render with default spacing value', () => {
      expect(star.prop(STARS_PROPS.COUNT)).toBe(defaultOptions.countOfStars);
    });
  });

  describe('Should render with passed props option', () => {
    const propsRating = 5;
    const expectedSpacing = 10;
    const expectedCount = 3;
    const expectedHalf = true;

    let props = {};
    let wrapper;
    let star;

    beforeEach(() => {
      props = {
        options: {
          rating: propsRating,
          spacing: 10,
          count: 3,
          half: true,
        },
      };

      wrapper = shallow(<Component {...props} />);
      star = wrapper.find(Stars);
    });

    it('Should render with default half value', () => {
      expect(star.prop(STARS_PROPS.HALF)).toBe(expectedHalf);
    });

    it('Should render with default spacing value', () => {
      expect(star.prop(STARS_PROPS.SPACING)).toBe(expectedSpacing);
    });

    it('Should render with default count value', () => {
      expect(star.prop(STARS_PROPS.COUNT)).toBe(expectedCount);
    });

    it('Should run callback if it exist', () => {
      const mockCallback = jest.fn();
      const param = 'any';
      wrapper = shallow(<Component {...props} changeRating={mockCallback} />);
      const wrapperInstance = wrapper.instance();
      wrapperInstance.props.changeRating(param);
      expect(mockCallback).toHaveBeenCalledWith(param);
    });
  });
});
