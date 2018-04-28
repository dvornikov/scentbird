import React from 'react';
import { shallow } from 'enzyme';
import Property from './Property';

describe('<Property />', () => {
  test('renders', () => {
    const wrapper = shallow(<Property />);
    expect(wrapper).toMatchSnapshot();
  });
});
