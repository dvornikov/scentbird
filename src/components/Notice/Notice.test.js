import React from 'react';
import { shallow } from 'enzyme';
import Notice from './Notice';

describe('<Notice />', () => {
  test('renders', () => {
    const wrapper = shallow(<Notice />);
    expect(wrapper).toMatchSnapshot();
  });
});
