import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown'
import './Select.less'
import styles from './Select.module.less'
import classNames from 'classnames'

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

  handleChange({ value }) {
    if (value !== this.placeholder) {
      this.setState({
        touched: true,
        value: value
      });

      this.updateValue(value)
    }
  }

  render() {
    const { options, placeholder, className: parentClassName, ...rest } = this.props;
    const nextProps = { options, placeholder }

    const { props, context } = this;
    const value = this.context.values && this.context.values[this.props.name] || "";

    const className = classNames({
      [parentClassName]: true,
      [styles['is-touched']]: this.state.touched
    });

    return <Dropdown className={className} {...nextProps} onChange={this.handleChange} value={value} />;
  }
}

Select.defaultProps = {
  validate: []
};


Select.contextTypes = {
  formName: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.string),
  update: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};

Select.propTypes = {};

export default Select;
