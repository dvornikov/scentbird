import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

describe('<Select />', () => {
  test('renders', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper).toMatchSnapshot();
  });
});
