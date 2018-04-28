import React, { Component } from 'react';
import PropTypes from 'prop-types';

export function withForm(WrappedComponent, formName) {
  class HOC extends Component {
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
      }), () => { console.log(this.state.values);});
    }

    getChildContext() {
      return {
        formName: formName,
        values: this.state.values,
        update: this.updateValue
      };
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  HOC.childContextTypes = {
    formName: PropTypes.string,
    values: PropTypes.object,
    update: PropTypes.func
  };

  return HOC;
}

export function withFormSection(WrappedComponent, sectionName) {
  class HOC extends Component {
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
      }),
      () => {
        // console.log(this.state.values);
        this.context.update(sectionName, this.state.values)
      });
    }

    getChildContext() {
      return {
        formName: sectionName,
        values: this.state.values,
        update: this.updateValue
      };
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  HOC.childContextTypes = {
    formName: PropTypes.string,
    values: PropTypes.object,
    update: PropTypes.func
  };

  HOC.contextTypes = {
    update: PropTypes.func.isRequired
  };

  return HOC;
}

export default withForm;
