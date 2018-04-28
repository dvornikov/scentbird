import React from 'react';
import { shallow } from 'enzyme';
import CardForm from './CardForm';

describe('<CardForm />', () => {
  test('renders', () => {
    const wrapper = shallow(<CardForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
