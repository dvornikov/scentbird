import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from './SubmitButton';

describe('<SubmitButton />', () => {
  test('renders', () => {
    const wrapper = shallow(<SubmitButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
