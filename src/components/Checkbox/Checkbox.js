import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Checkbox.module.less';

const Checkbox = ({ inverted, toggle, label, value, children, ...rest }) => {
  const className = classnames({
    [styles['control_checkbox']]: !toggle,
    [styles['control_toggle']]: !!toggle,
    [styles['control']]: true,
    [styles['control_type_inverted']]: !!inverted,
  });

  return <label className={className}>
    <span className={styles.control__title}>{ children ? children : label }</span>
    <input type="checkbox" value={value} {...rest} />
    <span className={styles.control__indicator} />
  </label>;
};

Checkbox.propTypes = {};

export default Checkbox
