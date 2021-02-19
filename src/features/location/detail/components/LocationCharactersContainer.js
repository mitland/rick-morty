import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CharacterCard from '../../../character/list/components/card/CharacterCard';
import { useLocation as useLocationContext } from '../providers/LocationProvider';
import getURLLocationId from '../../shared/helpers/getURLLocationId';
import usePrevious from '../../../../helpers/general/usePrevious';
import useFetchCharactersByIdLazy from '../../../character/shared/helpers/useFetchCharactersByIdLazy';
import CharacterListErrorCases from '../../../character/list/components/list/cases/CharacterListErrorCases';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});

const LocationCharactersContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const [location, locationRequestMeta] = useLocationContext();
  const prevLocation = usePrevious(location);
  const charactersIds = location && location.residents;
  const [
    characters,
    charactersMeta,
    { nextCharacters, resetCharacters },
  ] = useFetchCharactersByIdLazy(charactersIds, {
    initOffset: 0,
    initLimit: 8,
  });

  useEffect(() => {
    if (!location) return;
    if (prevLocation === location) return;

    resetCharacters();
    nextCharacters();
  }, [prevLocation, location, resetCharacters, nextCharacters]);

  const handleNextButtonClick = nextCharacters;

  const handleLocationClick = (location) => {
    const id = getURLLocationId(location.url);
    if (id) history.push(`/location/${id}`);
  };

  const isFetching =
    locationRequestMeta.isFetching || charactersMeta.isFetching;

  if (isFetching) {
    return <CircularProgress />;
  }

  if (!location) {
    return null;
  }

  if (charactersMeta.error) {
    return <CharacterListErrorCases error={charactersMeta.error.message} />;
  }

  return (
    <div className={classes.root}>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onLocationClick={handleLocationClick}
        />
      ))}

      {locationRequestMeta.isFetching || charactersMeta.isFetching ? (
        <CircularProgress />
      ) : null}

      {characters.length < charactersIds.length && (
        <Button onClick={handleNextButtonClick}>Next</Button>
      )}
    </div>
  );
};

export default LocationCharactersContainer;
