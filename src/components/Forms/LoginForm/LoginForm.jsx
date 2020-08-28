import React from 'react';
import style from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
          <Field placeholder='Login' name='login' component='input' type='text'/>
          <Field placeholder='Password' name='password' component='input' type='text'/>
          <Field name='rememberMe' component='input' type='checkbox'/>
          <button type='submit'>Логин</button>
      </form>
    );
}

export default reduxForm({form: 'login'})(LoginForm);