import React, { Component } from 'react';
import loginForm from './LoginForm.module.css';

class LoginForm extends Component {
  handleChangeInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
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
            <span className={loginForm.labelText}>{el.label}</span>
          </label>
          <input
            type={el.field}
            name={el.field}
            className={`${loginForm.input} t-input-email`}
            value={this[el.field]}
            onChange={this.handleChangeInput}
          />
        </p>
      );
    });
  };
  render() {
    return (
      <div className={loginForm.bg}>
        <div className="form">
          {this.renderField()}
          <div className={loginForm.buttons}>
            <button className={loginForm.button}>Войти</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
