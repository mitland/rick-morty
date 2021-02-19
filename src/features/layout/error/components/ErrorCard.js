import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { errorCardStyles } from '../styles/ErrorCardStyles';

const useStyles = makeStyles(errorCardStyles);

function ErrorCard({ errorName, errorText, children }) {
  const classes = useStyles();

  return (
    <div className={classes.errorContainer}>
      <div className={classes.errorBox}>
        <Typography variant="h4">{errorName}</Typography>

        <Typography variant="subtitle1">{errorText}</Typography>

        {children}
      </div>
    </div>
  );
}

ErrorCard.propTypes = {
  errorName: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ErrorCard;
