import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DefaultLayout from '../../features/layout/layout/DefaultLayout';
import { episodePageStyles } from './styles/EpisodePageStyles';
import EpisodeProvider from '../../features/episode/detail/providers/EpisodeProvider';
import EpisodeDetailContainer from '../../features/episode/detail/components/EpisodeDetailContainer';
import EpisodeCharactersContainer from '../../features/episode/detail/components/EpisodeCharactersContainer';

const useStyles = makeStyles(episodePageStyles);

export default function EpisodeDetailPage({ match }) {
  const classes = useStyles();
  const { id: episodeId } = match.params;

  return (
    <DefaultLayout>
      <div className={classes.container}>
        <div className={classes.box}>
          <EpisodeProvider episodeId={episodeId}>
            <div>
              <EpisodeDetailContainer />
              <EpisodeCharactersContainer />
            </div>
          </EpisodeProvider>
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
