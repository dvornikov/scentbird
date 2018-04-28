import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Layout.module.less';
import logo from './assets/scentbird.svg';

const Layout = ({ sidebar, content }) => {
  return <div styleName="page">
    <div styleName="page__header">
      <img
        src={logo}
        alt="ScentBird - New York"
        title="ScentBird - New York"
      />
    </div>
    <div styleName="page__sidebar">
      { sidebar }
    </div>

    <div styleName="page__content">
      { content }
    </div>
  </div>;
};

Layout.propTypes = {
  sidebar: PropTypes.element,
  content: PropTypes.element
};

export default CSSModules(Layout, styles);
