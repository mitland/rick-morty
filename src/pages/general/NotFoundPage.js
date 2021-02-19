import React from 'react';
import DefaultLayout from '../../features/layout/layout/DefaultLayout';
import NotFoundErrorCard from '../../features/layout/error/components/NotFoundErrorCard';

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <NotFoundErrorCard />
    </DefaultLayout>
  );
}
