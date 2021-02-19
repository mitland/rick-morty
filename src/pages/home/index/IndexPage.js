import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../../features/auth/reducers/authSlice';
import HomePage from '../home/HomePage';
import LandingPage from '../landing/LandingPage';

export default function IndexPage() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? <HomePage /> : <LandingPage />;
}
