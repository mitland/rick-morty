import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeButton from '../../shared/components/buttons/HomeButton';
import ErrorCard from './ErrorCard';
import { notFoundErrorCardStyles } from '../styles/ErrorCardStyles';

const useStyles = makeStyles(notFoundErrorCardStyles);

function NotFoundErrorCard() {
  const classes = useStyles();

  return (
    <ErrorCard errorName="404" errorText="Sorry we could not found the page">
      <HomeButton className={classes.homeButton} />
    </ErrorCard>
  );
}

export default NotFoundErrorCard;
