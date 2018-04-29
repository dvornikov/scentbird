import React, { Component } from 'react';
import SubmitButton from './components/SubmitButton'
import Layout from './components/Layout'
import OfferSummary from './components/OfferSummary'
import Checkbox from './components/Checkbox'
import LoginForm from './components/LoginForm'
import ShippingForm from './components/ShippingForm'
import BillingForm from './components/BillingForm'
import CardForm from './components/CardForm'
import { withForm } from './components/HOCForm'
import Notice from './components/Notice'
import Console from './components/Console'

import { connect } from 'react-redux'
import { addGift } from './actions/gifts'

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
      <div className="section">
        <h3>Create account</h3>
        <LoginForm />
      </div>

      <div className="section">
        <h3>Shipping address</h3>
        <ShippingForm />

        <div className="section__additional">
          <Checkbox
            checked={!this.state.billingAddress}
            label="Use this address as my billing address"
            onChange={ (e) => { this.handleBillingAddress(e) }}
          />
        </div>
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

      <div className="actions">
        <div className="actions__item">
          <a href="/back" className="actions__link">Back</a>
        </div>
        <div className="actions__item">
          <SubmitButton label="Buy now" />
        </div>
      </div>
    </div>
  }

  renderSidebar() {
    return <OfferSummary />;
  }

  renderNotice() {
    return <div>
      <Notice />
      {
        this.props.gifts && this.props.gifts.length !== 0 &&
        <Console data={this.props.gifts} />
      }
    </div>
  }

  renderTitle() {
    return <h1 className="page-header">
      MONTH-TO-MONTH SUBSCRIPTION
      <small>Billed monthly. Renews automatically, cancel any time. Free shipping.</small>
    </h1>;
  }

  render() {
    return <Layout
      content={this.renderContent()}
      sidebar={this.renderSidebar()}
      notice={this.renderNotice()}
      title={this.renderTitle()}
    />
  }
}

export default connect(
  ({ gifts }) => ({ gifts }),
  (dispatch) => ({
    onSubmit: (data) => dispatch(addGift(data))
  })
)(withForm(App, "gift"))
