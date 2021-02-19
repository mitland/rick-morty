import React from 'react';
import PropTypes from 'prop-types';
import ErrorCard from '../../../../../layout/error/components/ErrorCard';
import {
  NOTHING_FOUND_ERROR,
  UNEXPECTED_ERROR,
} from '../../../../shared/services/CharacterService';

export default function CharacterListErrorCases({ error }) {
  switch (error) {
    case NOTHING_FOUND_ERROR:
      return (
        <ErrorCard
          errorName="Nothing found"
          errorText="Sorry, there are no characters"
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

CharacterListErrorCases.propTypes = {
  error: PropTypes.string.isRequired,
};
