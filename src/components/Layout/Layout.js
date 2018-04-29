import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Layout.module.less';
import logo from './assets/scentbird.svg';

const Layout = ({ sidebar, content, title, notice }) => {
  return <div styleName="page">
    <div styleName="page__header">
      <img
        src={logo}
        alt="ScentBird - New York"
        title="ScentBird - New York"
      />
    </div>

    {
      title &&
      <div styleName="page__title">
        { title }
      </div>
    }

    {
      sidebar &&
      <div styleName="page__sidebar">
        { sidebar }
      </div>
    }

    {
      content &&
      <div styleName="page__content">
        { content }
      </div>
    }

    {
      notice &&
      <div styleName="page__notice">
        { notice }
      </div>
    }

  </div>;
};

Layout.propTypes = {
  sidebar: PropTypes.element,
  content: PropTypes.element,
  notice: PropTypes.element,
  title: PropTypes.element,
};

export default CSSModules(Layout, styles);
