import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UnexpectedErrorCard from '../features/layout/error/components/UnexpectedErrorCard';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <UnexpectedErrorCard />;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
