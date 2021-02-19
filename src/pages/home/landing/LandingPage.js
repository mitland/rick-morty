import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import DefaultLayout from '../../../features/layout/layout/DefaultLayout';
import { landingPageStyles } from './styles/LandingPageStyles';

const useStyles = makeStyles(landingPageStyles);

export default function LandingPage() {
  const classes = useStyles();

  return (
    <DefaultLayout>
      <div className={classes.container}>
        <div className={classes.box}>
          <Button
            to="/login"
            component={Link}
            variant="contained"
            color="primary"
            className={classes.loginButton}
            aria-label="login"
          >
            Come on Morty
          </Button>
        </div>
      </div>
    </DefaultLayout>
  );
}
