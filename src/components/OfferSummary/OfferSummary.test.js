import React from 'react';
import { shallow } from 'enzyme';
import OfferSummary from './OfferSummary';

describe('<OfferSummary />', () => {
  test('renders', () => {
    const wrapper = shallow(<OfferSummary />);
    expect(wrapper).toMatchSnapshot();
  });
});
