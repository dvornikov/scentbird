import React from 'react';
import { shallow } from 'enzyme';
import FormControl from './FormControl';

describe('<FormControl />', () => {
  test('renders', () => {
    const wrapper = shallow(<FormControl />);
    expect(wrapper).toMatchSnapshot();
  });
});
