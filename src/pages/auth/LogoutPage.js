import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthStorage from '../../helpers/storage/AuthStorage';
import {
  logout,
  selectIsAuthenticated,
} from '../../features/auth/reducers/authSlice';
import DefaultLayout from '../../features/layout/layout/DefaultLayout';

export default function LogoutPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    AuthStorage.removeUser();
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      return;
    }

    history.replace('/');
  }, [isAuthenticated, history]);

  return <DefaultLayout>Loader</DefaultLayout>;
}
