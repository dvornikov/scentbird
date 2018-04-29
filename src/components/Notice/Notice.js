import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Notice.module.less';
import noticeImage from '../../assets/images/scentbird-notice.png'

const Notice = () => {
  return  <div styleName="notice">
    <img styleName="notice__image" src={noticeImage} />
    <p styleName="notice__text">
      You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.
    </p>
  </div>;
};

Notice.propTypes = {};

export default CSSModules(Notice, styles);
