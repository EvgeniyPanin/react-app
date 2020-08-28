import React from 'react';
import LoginForm from '../Forms/LoginForm/LoginForm';

function onSubmit(data) {
  console.log(data)
}

const Login = () => {
    return (
      <div>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={onSubmit}/>
      </div>
    );
}

export default Login;