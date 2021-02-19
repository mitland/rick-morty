import React from 'react';
import PropTypes from 'prop-types';
import ErrorCard from '../../../../layout/error/components/ErrorCard';
import {
  NOTHING_FOUND_ERROR,
  UNEXPECTED_ERROR,
} from '../../../shared/services/EpisodesService';

export default function EpisodeDetailErrorCases({ error }) {
  switch (error) {
    case NOTHING_FOUND_ERROR:
      return (
        <ErrorCard
          errorName="Nothing found"
          errorText="Sorry, such episode does not exist"
        />
      );
    case UNEXPECTED_ERROR:
    default:
      return (
        <ErrorCard
          errorName="UnexpectedError"
          errorText="Sorry there was a problem"
        />
      );
  }
}

EpisodeDetailErrorCases.propTypes = {
  error: PropTypes.string.isRequired,
};
