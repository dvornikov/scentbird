import React from 'react';
import { shallow } from 'enzyme';
import Console from './Console';

describe('<Console />', () => {
  test('renders', () => {
    const wrapper = shallow(<Console />);
    expect(wrapper).toMatchSnapshot();
  });
});
