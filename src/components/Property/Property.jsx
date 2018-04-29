import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Property.module.less';

const Property = ({ name, children }) => {
  return <div styleName="property">
    <span styleName="property__name">{ name }</span>
    <span styleName="property__value">{ children }</span>
  </div>;
}

export default CSSModules(Property, styles);
