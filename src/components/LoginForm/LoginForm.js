import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import loginForm from './LoginForm.module.css';
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
    console.log(this.props)
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
    const { isAuthorized } = this.props;    
    if (isAuthorized) {
      return <Redirect to='/home'/>
    }
    return (
      <div className={loginForm.bg}>
        <div className={`${loginForm.form} t-form`}>
          {this.renderField()}
          <div className={loginForm.buttons}>
            <button className={loginForm.button} onClick={this.handleAuthorize}>
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
