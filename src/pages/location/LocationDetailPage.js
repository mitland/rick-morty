import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DefaultLayout from '../../features/layout/layout/DefaultLayout';
import { locationPageStyles } from './styles/LocationPageStyles';
import LocationProvider from '../../features/location/detail/providers/LocationProvider';
import LocationDetailContainer from '../../features/location/detail/components/LocationDetailContainer';
import LocationCharactersContainer from '../../features/location/detail/components/LocationCharactersContainer';

const useStyles = makeStyles(locationPageStyles);

export default function EpisodeDetailPage({ match }) {
  const classes = useStyles();
  const { id: locationId } = match.params;

  return (
    <DefaultLayout>
      <div className={classes.container}>
        <div className={classes.box}>
          <LocationProvider locationId={locationId}>
            <div>
              <LocationDetailContainer />
              <LocationCharactersContainer />
            </div>
          </LocationProvider>
        </div>
      </div>
    </DefaultLayout>
  );
}

EpisodeDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
