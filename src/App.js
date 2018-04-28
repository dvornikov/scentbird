import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Input from './components/Input'
import Property from './components/Property'
import Layout from './components/Layout'
import LoginForm from './components/LoginForm'
import ShippingForm from './components/ShippingForm'
import BillingForm from './components/BillingForm'
import CardForm from './components/CardForm'
import { withForm } from './components/HOCForm'
import goodImage from './assets/images/scentbird-good.jpg'
import noticeImage from './assets/images/scentbird-notice.png'
// import styles from './App.module.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billingAddress: false
    }
  }

  handleBillingAddress() {
    this.setState((prevState) => ({
      billingAddress: !prevState.billingAddress
    }));
  }

  renderContent() {
    return <div>
      <h1 className="page-header">
        MONTH-TO-MONTH SUBSCRIPTION
        <small>Billed monthly. Renews automatically, cancel any time. Free shipping.</small>
      </h1>

      <div className="section">
        <h3>Create account</h3>
        <LoginForm />
      </div>

      <div className="section">
        <h3>Shipping address</h3>
        <ShippingForm />
      </div>

      <div className="section">
        <label>
          <input
            type="checkbox"
            checked={!this.state.billingAddress}
            onChange={ (e) => { this.handleBillingAddress(e) }}
          /> Use this address as my billing address
        </label>
      </div>

      {
        this.state.billingAddress &&
        <div className="section">
          <h3>Billing address</h3>
          <BillingForm />
        </div>
      }

      <div className="section">
        <h3>Secure credit card payment</h3>
        <CardForm />
      </div>

      <div>
        <a href="#">Back</a>
        <button>Buy now</button>
      </div>
    </div>
  }

  renderSidebar() {
    return <div>
      <div className="offer-summary">
        <div className="offer-summary__header">
          <img src={goodImage} />
        </div>
        <div className="offer-summary__content">
          <div className="offer-summary__prices">
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
              $50 <input type="checkbox" checked={true} />
            </Property>
          </div>
          <div className="offer-summary__total">
            <Property name="Total">
              $25.00
            </Property>
          </div>
        </div>
        <div className="offer-summary__footer">
          Have a <a className="offer-summary__link" href="">coupon code</a>?
        </div>
      </div>

      <div className="notice">
        <img className="notice__image" src={noticeImage} />
        <p className="notice__text">
          You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.
        </p>
      </div>
    </div>
  }

  render() {
    return <Layout
      content={this.renderContent()}
      sidebar={this.renderSidebar()}
    />
  }
}

export default withForm(App, "gift");
