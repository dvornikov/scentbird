import React from 'react';
import { shallow } from 'enzyme';
import FormGroup from './FormGroup';

describe('<FormGroup />', () => {
  test('renders', () => {
    const wrapper = shallow(<FormGroup />);
    expect(wrapper).toMatchSnapshot();
  });
});
