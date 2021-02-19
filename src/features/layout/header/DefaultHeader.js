import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import LoginButton from '../shared/components/buttons/LoginButton';
import LogoutButton from '../shared/components/buttons/LogoutButton';
import Logo from '../shared/components/logo/Logo';
import { selectIsAuthenticated } from '../../auth/reducers/authSlice';
import CharacterSearchContainer from '../../character/search/components/CharacterSearchContainer';

const useStyles = makeStyles({
  header: {
    backgroundColor: 'white',
  },
});

function DefaultHeader({ children }) {
  const classes = useStyles();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Logo />

          {isAuthenticated ? <CharacterSearchContainer /> : null}

          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          {children}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

DefaultHeader.propTypes = {
  children: PropTypes.node,
};

export default DefaultHeader;
