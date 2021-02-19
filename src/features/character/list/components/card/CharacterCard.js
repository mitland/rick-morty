import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import CharacterTypeShape from '../../../shared/helpers/CharacterTypeShape';

const useStyles = makeStyles({
  card: {
    width: 345,
    marginBottom: 50,
  },
  media: {
    height: 140,
  },
});

export default function CharacterCard({ character, onLocationClick }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} key={character.id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={character.image}
          title={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <span>{character.name}</span>
            <span>-</span>
            <span>{character.status}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {character.species}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => onLocationClick(character.origin)}
        >
          {character.origin.name}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => onLocationClick(character.location)}
        >
          {character.location.name}
        </Button>
      </CardActions>
    </Card>
  );
}

CharacterCard.propTypes = {
  character: CharacterTypeShape.isRequired,
  onLocationClick: PropTypes.func.isRequired,
};
