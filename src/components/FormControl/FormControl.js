import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormControl.module.less';

const FormControl = ({ children }) => {
  return <div className={styles.form__control}>
    { children }
  </div>;
};

FormControl.propTypes = {};

export default FormControl;
