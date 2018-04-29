import React from 'react';
import Input from '../Input'
import FormGroup from '../FormGroup'
import FormControl from '../FormControl'
import { withFormSection } from '../HOCForm'

const LoginForm = (props) => {
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
          name="password"
          validate={['required']}
          placeholder="Password"
        />
      </FormControl>
    </FormGroup>
  </form>;
}

LoginForm.propTypes = {};

export default withFormSection(LoginForm, "login");
