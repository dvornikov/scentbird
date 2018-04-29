import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitButton.module.less';

const SubmitButton = ({ label }, { submit }) => {
  return <button className={styles.button} onClick={submit}>{ label }</button>;
};

SubmitButton.contextTypes = {
  submit: PropTypes.func.isRequired
};

export default SubmitButton;
