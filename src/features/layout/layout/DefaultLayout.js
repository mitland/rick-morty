import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DefaultHeader from '../header/DefaultHeader';

const useStyles = makeStyles({
  bodyContainer: {
    marginTop: '50px',
  },
});

const DefaultLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <DefaultHeader />

      <div className={classes.bodyContainer}>{children}</div>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultLayout;
