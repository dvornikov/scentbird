import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input'
import Select from '../Select'
import FormGroup from '../FormGroup'
import FormControl from '../FormControl'

class BillingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {}
    }
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(name, value) {
    this.setState((prevState, props) => ({
      values: {
        ...prevState.values,
        [name]: value
      }
    }));
  }

  getChildContext() {
    return {
      formName: "billing",
      values: this.state.values,
      update: this.updateValue
    };
  }

  render() {
    return <form className="form">
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
            validate={['required']}
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
          <Select options={["New York"]} placeholder="City" />
        </FormControl>
        <FormControl>
          <Select options={["New York"]} placeholder="State" />
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
      </FormGroup>
    </form>;
  }
}

BillingForm.childContextTypes = {
  formName: PropTypes.string,
  values: PropTypes.object,
  update: PropTypes.func
};

BillingForm.propTypes = {};

export default BillingForm;
