import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import CharacterCard from '../../../character/list/components/card/CharacterCard';
import { useEpisode } from '../providers/EpisodeProvider';
import useFetchCharactersById from '../../../character/shared/helpers/useFetchCharactersById';
import getURLLocationId from '../../../location/shared/helpers/getURLLocationId';
import CharacterListErrorCases from '../../../character/list/components/list/cases/CharacterListErrorCases';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});

const EpisodeCharactersContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const [
    episode,
    { isFetching: isEpisodeFetching, fetchedOnce: isEpisodeFetchedOnce },
  ] = useEpisode();
  const [
    characters,
    {
      isFetching: isCharactersFetching,
      fetchedOnce: isCharactersFetchedOnce,
      error: charactersError,
    },
  ] = useFetchCharactersById(episode && episode.characters);

  const handleLocationClick = (location) => {
    const id = getURLLocationId(location.url);
    if (id) history.push(`/location/${id}`);
  };

  const fetchedOnce = isEpisodeFetchedOnce || isCharactersFetchedOnce;
  const isFetching = isEpisodeFetching || isCharactersFetching;

  if (!fetchedOnce || isFetching) {
    return <CircularProgress />;
  }

  if (charactersError) {
    return <CharacterListErrorCases error={charactersError.message} />;
  }

  if (!episode || !characters) {
    return null;
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
    </div>
  );
};

export default EpisodeCharactersContainer;
