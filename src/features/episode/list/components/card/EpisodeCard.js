import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import { Link } from 'react-router-dom';
import EpisodeTypeShape from '../../../shared/helpers/EpisodeTypeShape';

// @TODO fix disaign of link, think about the route system and recorcds
function EpisodeCard({ episode }) {
  return (
    <Link to={`/episode/${episode.id}`}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CameraRollIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={episode.episode} secondary={episode.air_date} />
        <ListItemText secondary={episode.name} />
      </ListItem>
    </Link>
  );
}

EpisodeCard.propTypes = {
  episode: EpisodeTypeShape.isRequired,
};

export default EpisodeCard;
