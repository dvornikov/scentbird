import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Input.module.less';
import classNames from 'classnames'
import * as validators from '../../validators'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: []
    }

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  updateValue(value) {
    this.context.update(this.props.name, value);

    if (this.state.errors.length) {
      setTimeout(() => this.isValid(true), 0);
    }
  }

  onChange(event) {
    this.updateValue(event.target.value)
  }

  isValid(showErrors) {
    const errors = this.props.validate
      .reduce((memo, currentName) =>
        memo.concat(validators[currentName](
          this.context.values[this.props.name]
        )), []);

    if (showErrors) {
      this.setState({
        errors
      });
    }
    return !errors.length;
  }

  onBlur() {
    this.isValid(true);
  }

  render() {
    const { props, context } = this;
    const formName = context.formName || "";
    const id = formName + "_" + props.name;
    const value = this.context.values && this.context.values[this.props.name] || "";

    return <div styleName={"input input_has-float-label" + (!!this.state.errors.length ? ' input_has-error' : '')}>
      <input
        id={id}
        styleName="input__control"
        value={value}
        onChange={this.onChange}
        onBlur={this.onBlur}
        {...props}
      />
      <label htmlFor={id}>{ props.placeholder }</label>
      { !!this.state.errors.length && <div styleName="input__error">{ this.state.errors[0] }</div> }
    </div>
  }
};

Input.defaultProps = {
  validate: []
};


Input.contextTypes = {
  formName: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.string),
  update: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};

export default CSSModules(Input, styles, { allowMultiple: true });
