import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input'
import Select from '../Select'
import FormGroup from '../FormGroup'
import FormControl from '../FormControl'
import { withFormSection } from '../HOCForm'

const ShippingForm = (props) => {
  return <form className="form">
    <FormGroup>
      <FormControl>
        <Input
          type="text"
          name="firstname"
          validate={['required']}
          placeholder="First name"
        />
      </FormControl>
      <FormControl>
        <Input
          type="text"
          name="surname"
          validate={['required']}
          placeholder="Last name"
        />
      </FormControl>
    </FormGroup>
    <FormGroup>
      <FormControl>
        <Input
          type="text"
          name="address"
          validate={['required']}
          placeholder="Street address"
        />
      </FormControl>
      <FormControl>
        <Input
          type="text"
          name="suite"
          placeholder="Apt/Suite (Optional)"
        />
      </FormControl>
    </FormGroup>
    <FormGroup>
      <FormControl>
        <Input
          name="zip"
          type="text"
          validate={['required']}
          placeholder="Zip"
        />
      </FormControl>
      <FormControl>
        <Select
          options={["New York"]}
          name="city"
          placeholder="City"
          validate={['required']}
        />
      </FormControl>
      <FormControl>
        <Select
          options={["New York"]}
          name="state"
          placeholder="State"
          validate={['required']}
        />
      </FormControl>
    </FormGroup>
    <FormGroup>
      <FormControl>
        <Input
          name="country"
          type="text"
          validate={['required']}
          placeholder="Country"
        />
      </FormControl>
    </FormGroup>
    <FormGroup>
      <FormControl>
        <Input
          type="text"
          name="mobile"
          placeholder="Mobile number (Optional)"
        />
      </FormControl>
      <FormControl>
        <span>We may send you special discounts and offers</span>
      </FormControl>
    </FormGroup>
  </form>;
}

ShippingForm.propTypes = {};

export default withFormSection(ShippingForm, "shipping");
