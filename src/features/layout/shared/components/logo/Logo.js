import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  logo: {
    height: '50px',
  },
});

export default function Logo() {
  const classes = useStyles();

  return (
    <Link to="/">
      <img className={classes.logo} src="/iliustrations/logo.png" alt="logo" />
    </Link>
  );
}
