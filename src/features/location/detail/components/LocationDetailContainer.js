import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import LocationCard from '../../list/components/LocationCard';
import { useLocation as useLocationContext } from '../providers/LocationProvider';
import LocationDetailErrorCases from './cases/LocationDetailErrorCases';

export default function LocationDetailContainer() {
  const [location, { fetchedOnce, isFetching, error }] = useLocationContext();

  if (!fetchedOnce || isFetching) {
    return <CircularProgress />;
  }

  if (error) {
    return <LocationDetailErrorCases error={error.message} />;
  }

  return (
    <div>
      <LocationCard location={location} />
    </div>
  );
}
