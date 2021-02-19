import React from 'react';
import PropTypes from 'prop-types';
import {
  NOTHING_FOUND_ERROR,
  UNEXPECTED_ERROR,
} from '../../../../shared/services/EpisodesService';
import ErrorCard from '../../../../../layout/error/components/ErrorCard';

export default function EpisodeListErrorCases({ error }) {
  switch (error) {
    case NOTHING_FOUND_ERROR:
      return (
        <ErrorCard
          errorName="Nothing to find"
          errorText="Sorry there are no episodes"
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

EpisodeListErrorCases.propTypes = {
  error: PropTypes.string.isRequired,
};
