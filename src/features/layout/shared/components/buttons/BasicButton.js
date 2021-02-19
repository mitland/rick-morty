import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const BasicButton = ({ className, to, children, component }) => {
  return (
    <Button
      to={to}
      component={component}
      className={className}
      color="secondary"
      aria-label="home"
    >
      {children}
    </Button>
  );
};

BasicButton.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object,
  ]),
};

BasicButton.defaultProps = {
  component: Link,
};

export default BasicButton;
