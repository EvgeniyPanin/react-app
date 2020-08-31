import React from 'react';
import style from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../Fields/Field';
import { required } from '../../../utils/validators/required';

const LoginForm = (props) => {
    return (
      <form className={style.login_form} onSubmit={props.handleSubmit}>
        <div className="form-group">
          <Field type="text" 
                className="form-control" 
                placeholder='Login' 
                name='login' 
                component={Input}
                validate={[required]}
          />
        </div>
        <div className="form-group">
          <Field className="form-control" 
                placeholder='Password' 
                name='password' 
                component={Input}
                validate={[required]}
                type='text'
          />
        </div>
        <div className="form-group form-check">
          <Field type="checkbox" className="form-check-input" name='rememberMe' component='input'/>
          <label className="form-check-label" for="exampleCheck1">Запомнить меня</label>
        </div>
        <button type="submit" className={`btn btn-primary ${style.button_login}`}>Войти</button>
      </form>
    );
}

export default reduxForm({form: 'login'})(LoginForm);