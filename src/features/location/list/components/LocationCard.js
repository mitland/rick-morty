import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PlaceIcon from '@material-ui/icons/Place';
import LocationTypeShape from '../../shared/helpers/LocationTypeShape';

function LocationCard({ location }) {
  return (
    <List key={location.id}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PlaceIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={location.name} secondary={location.dimension} />
        <ListItemText secondary={location.type} />
      </ListItem>
    </List>
  );
}

LocationCard.propTypes = {
  location: LocationTypeShape.isRequired,
};

export default LocationCard;
