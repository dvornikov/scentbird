import React, { Component } from 'react';
import PropTypes from 'prop-types';
import without from 'lodash.without';
import assign from 'lodash.assign';

export function withForm(WrappedComponent, formName) {
  class HOC extends Component {
    constructor(props) {
      super(props)
      this.state = {
        values: {}
      }
      this.validations = [];
      this.updateValue = this.updateValue.bind(this);
      this.submit = this.submit.bind(this);
      this.registerValidation = this.registerValidation.bind(this);
      this.removeValidation = this.removeValidation.bind(this);
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
        update: this.updateValue,
        submit: this.submit,
        registerValidation: this.registerValidation
      };
    }

    registerValidation(isValidFunc) {
      this.validations = [...this.validations, isValidFunc];
      return this.removeValidation.bind(null, isValidFunc);
    }

    removeValidation(ref) {
      this.validations = without(this.validations, ref);
    }

    isFormValid(showErrors) {
      return this.validations.reduce((memo, isValidFunc) =>
        isValidFunc(showErrors) && memo, true);
    }

    submit(){
      if (this.isFormValid(true)) {
        console.log("Submit!");
        this.props.onSubmit(assign({}, this.state.values));
        // this.props.reset();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  HOC.childContextTypes = {
    formName: PropTypes.string,
    values: PropTypes.object,
    update: PropTypes.func,
    submit: PropTypes.func,
    registerValidation: PropTypes.func
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
