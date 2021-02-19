import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import EpisodeCard from '../../list/components/card/EpisodeCard';
import { useEpisode } from '../providers/EpisodeProvider';
import EpisodeDetailErrorCases from './cases/EpisodeDetailErrorCases';

export default function EpisodeDetailContainer() {
  const [episode, { isFetching, error }] = useEpisode();

  if (error) {
    return <EpisodeDetailErrorCases error={error.message} />;
  }

  if (!episode || isFetching) {
    return <CircularProgress />;
  }

  return (
    <div>
      <EpisodeCard episode={episode} />
    </div>
  );
}
