import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  air_date: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});
