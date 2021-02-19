import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import HomeButton from '../../shared/components/buttons/HomeButton';
import ErrorCard from './ErrorCard';
import { unexpectedErrorCardStyles } from '../styles/ErrorCardStyles';

const useStyles = makeStyles(unexpectedErrorCardStyles);

export default function UnexpectedErrorCard() {
  const classes = useStyles();

  return (
    <ErrorCard
      errorName="Oops"
      errorText="We have experienced an unexpected error"
    >
      <HomeButton className={classes.homeButton} component={Link} />
    </ErrorCard>
  );
}
