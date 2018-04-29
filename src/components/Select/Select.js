import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown'
import './Select.less'
import styles from './Select.module.less'
import classNames from 'classnames'
import * as validators from '../../validators'

class Select extends Component {
  constructor(props) {
    super(props)

    this.placeholder = props.placeholder || ""
    this.state = {
      touched: false,
      value: this.placeholder,
      errors: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  updateValue(value) {
    this.context.update(this.props.name, value);

    if (this.state.errors.length) {
      setTimeout(() => this.isValid(true), 0);
    }
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

  handleChange({ value }) {
    if (value !== this.placeholder) {
      this.setState({
        touched: true,
        value: value
      });

      this.updateValue(value)
    }
  }

  componentWillMount() {
    this.removeValidationFromContext = this.context.registerValidation(show => this.isValid(show));
  }

  componentWillUnmount() {
    this.removeValidationFromContext();
  }

  render() {
    const { options, placeholder, className: parentClassName, ...rest } = this.props;
    const nextProps = { options, placeholder }

    const { props, context } = this;
    const value = this.context.values && this.context.values[this.props.name] || "";

    const dropdownClassName = classNames({
      [parentClassName]: true,
      [styles['is-touched']]: this.state.touched,
      [styles['has-error']]: !!this.state.errors.length
    });

    const className = classNames({
      [styles.select]: true,
    });

    return <div className={className}>
      <Dropdown className={dropdownClassName} {...nextProps} onChange={this.handleChange} value={value} />
      { !!this.state.errors.length && <div className={styles.select__error}>{ this.state.errors[0] }</div> }
    </div>;
  }
}

Select.defaultProps = {
  validate: []
};


Select.contextTypes = {
  formName: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.string),
  update: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  registerValidation: PropTypes.func.isRequired
};

Select.propTypes = {};

export default Select;
