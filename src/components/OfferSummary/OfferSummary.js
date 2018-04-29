import React from 'react';
import PropTypes from 'prop-types';
import Property from '../Property'
import goodImage from '../../assets/images/scentbird-good.jpg'
import CSSModules from 'react-css-modules';
import styles from './OfferSummary.module.less';

const OfferSummary = () => {
  return <div styleName="offer-summary">
    <div styleName="offer-summary__header">
      <img src={goodImage} />
    </div>
    <div styleName="offer-summary__content">
      <div styleName="offer-summary__prices">
        {/* Instead cuz we can use the "map" method */}
        <Property name="Monthly subscription">
          $14.95
        </Property>

        <Property name="Shipping">
          FREE
        </Property>

        <Property name="Discount">
          &mdash;
        </Property>

        <Property name="Credit (Balance $100)" important>
          $50 <input type="checkbox" checked={true} onChange={(e) => {}} />
        </Property>
      </div>
      <div styleName="offer-summary__total">
        <Property name="Total">
          $25.00
        </Property>
      </div>
    </div>
    <div styleName="offer-summary__footer">
      Have a <a styleName="offer-summary__link" href="">coupon code</a>?
    </div>
  </div>;
};

OfferSummary.propTypes = {};

export default CSSModules(OfferSummary, styles);
