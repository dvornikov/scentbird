import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input'
import FormGroup from '../FormGroup'
import FormControl from '../FormControl'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {}
    }
    this.updateValue = this.updateValue.bind(this);
  }

  getChildContext() {
    return {
      formName: "login",
      values: this.state.values,
      update: this.updateValue
    };
  }

  updateValue(name, value) {
    this.setState((prevState, props) => ({
      values: {
        ...prevState.values,
        [name]: value
      }
    }));
  }

  render() {
    return <form className="form">
      <FormGroup>
        <FormControl>
          <Input
            type="text"
            name="email"
            validate={['required', 'email']}
            placeholder="Email address"
          />
        </FormControl>
        <FormControl>
          <Input
            type="password"
            validate={['required']}
            placeholder="Password"
          />
        </FormControl>
      </FormGroup>
    </form>;
  }
}

LoginForm.childContextTypes = {
  formName: PropTypes.string,
  values: PropTypes.object,
  update: PropTypes.func
};

LoginForm.propTypes = {};

export default LoginForm;
