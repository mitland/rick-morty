import React from 'react';
import BasicButton from './BasicButton';

const LoginButton = (props) => {
  return (
    <BasicButton {...props} to="/login">
      Login
    </BasicButton>
  );
};

export default LoginButton;
