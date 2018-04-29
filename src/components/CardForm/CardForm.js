import React from 'react';
import styles from './CardForm.module.less';
import Select from '../Select'
import Input from '../Input'
import FormGroup from '../FormGroup'
import FormControl from '../FormControl'
import logo from './assets/shield.svg'
import { withFormSection } from '../HOCForm'

const range = (start, end) => ([...Array(end - start + 1).keys()].map((v, k) => `${k + start}`));

const CardForm = (props) => {
  return <form className={styles.form_type_card}>
    <h3 className={styles.title}><img src={logo} className={styles.shield} alt="" />128-BIT ENCRYPTION. YOU’RE SAFE</h3>
    <FormGroup>
      <FormControl>
        <Input
          className={styles.input}
          type="text"
          name="number"
          placeholder="Credit card number"
          validate={['required', 'card']}
        />
      </FormControl>
      <FormControl>
        <Input
          className={styles.input}
          name="code"
          type="text"
          validate={['required', 'code']}
          placeholder="Security code"
        />
      </FormControl>
    </FormGroup>
    <FormGroup>
      <FormControl>
        <Select
          className={styles.select}
          name="month"
          options={ range(1, 12) }
          placeholder="Month"
          validate={['required']}
        />
      </FormControl>
      <FormControl>
        <Select
          className={styles.select}
          options={range(2012, 2032)}
          placeholder="Year"
          name="year"
          validate={['required']}
        />
      </FormControl>
    </FormGroup>
  </form>;
}

CardForm.propTypes = {};

export default withFormSection(CardForm, "card");
