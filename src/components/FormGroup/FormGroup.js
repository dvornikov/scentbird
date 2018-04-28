import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormGroup.module.less'

const FormGroup = ({ children }) => {
  return <div className={styles.form__group}>
    { children }
  </div>;
};

FormGroup.propTypes = {};

export default FormGroup;
