import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectIsAuthenticated } from '../../../features/auth/reducers/authSlice';

const createGuestGuard = (config = { to: '/' }) => (Component) =>
  function GuestGuard(props) {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    return !isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={config.to} />
    );
  };

export default createGuestGuard;
