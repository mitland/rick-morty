import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DefaultLayout from '../../features/layout/layout/DefaultLayout';
import { episodePageStyles } from './styles/EpisodePageStyles';
import EpisodeListContainer from '../../features/episode/list/components/list/EpisodeListContainer';

const useStyles = makeStyles(episodePageStyles);

export default function EpisodesPage() {
  const classes = useStyles();

  return (
    <DefaultLayout>
      <div className={classes.container}>
        <div className={classes.box}>
          <EpisodeListContainer />
        </div>
      </div>
    </DefaultLayout>
  );
}
