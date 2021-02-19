import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import List from '@material-ui/core/List';
import EpisodeCard from '../card/EpisodeCard';
import EpisodeTypeShape from '../../../shared/helpers/EpisodeTypeShape';

function EpisodeList({ episodes, pageConfig }) {
  return (
    <div>
      <List>
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </List>

      <Pagination shape="rounded" {...pageConfig} />
    </div>
  );
}

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(EpisodeTypeShape).isRequired,
  pageConfig: PropTypes.shape({
    page: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default EpisodeList;
