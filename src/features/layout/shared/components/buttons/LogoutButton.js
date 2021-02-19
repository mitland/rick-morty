import React from 'react';
import BasicButton from './BasicButton';

const LogoutButton = (props) => {
  return (
    <BasicButton {...props} to="/logout">
      Logout
    </BasicButton>
  );
};

export default LogoutButton;
