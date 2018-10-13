import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChangeInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleAuthorize = () => {
    const { authorize } = this.props;
    const { email, password } = this.state;
    authorize(email, password);
  };

  renderField = () => {
    const fields = [
      { field: 'email', label: 'Почта' },
      { field: 'password', label: 'Пароль' }
    ];

    return fields.map(el => {
      return (
        <p key={el.field}>
          <label htmlFor={el.field}>
            <span className={styles.labelText}>{el.label}</span>
          </label>
          <input
            type={el.field}
            name={el.field}
            className={`${styles.input} t-input-${el.field}`}
            value={this[el.field]}
            onChange={this.handleChangeInput}
          />
        </p>
      );
    });
  };

  render() {
    const { isAuthorized, authError } = this.props;
    if (isAuthorized) {
      return <Redirect to="/app" />;
    }
    return (
      <div className={styles.bg}>
        <div className={`${styles.form} t-form`}>
          {this.renderField()}
          {authError && <p className={styles.error}>{authError}</p>}
          <div className={styles.buttons}>
            <button className={`${styles.button} t-login`} onClick={this.handleAuthorize}>
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
