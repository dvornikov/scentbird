import React from 'react';
import { shallow } from 'enzyme';
import ShippingForm from './ShippingForm';

describe('<ShippingForm />', () => {
  test('renders', () => {
    const wrapper = shallow(<ShippingForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
