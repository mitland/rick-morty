import React from 'react';
import AuthFormContainer from '../../features/auth/components/AuthFormContainer';
import DefaultLayout from '../../features/layout/layout/DefaultLayout';

export default function LoginPage() {
  return (
    <DefaultLayout>
      <AuthFormContainer />
    </DefaultLayout>
  );
}
