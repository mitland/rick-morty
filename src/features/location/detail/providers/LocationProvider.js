import React, { createContext, useContext, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../../../helpers/fetch/useFetch';
import { getLocationById } from '../../shared/services/LocationService';
import ErrorCatcher from '../../../../helpers/fetch/ErrorCatcher';

const LocationContext = createContext(null);

const LocationProvider = ({ locationId, children }) => {
  const [request, fetchEpisodeById] = useFetch(getLocationById);

  useEffect(() => {
    fetchEpisodeById(locationId).catch(ErrorCatcher.catchError);
  }, [locationId, fetchEpisodeById]);

  const providerValue = useMemo(() => {
    return [request.response, { ...request.meta }];
  }, [request.response, request.meta]);

  return (
    <LocationContext.Provider value={providerValue}>
      {children}
    </LocationContext.Provider>
  );
};

LocationProvider.propTypes = {
  locationId: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const useLocation = () => {
  return useContext(LocationContext);
};

export default LocationProvider;
export { useLocation };
