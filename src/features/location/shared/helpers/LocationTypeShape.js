import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
  residents: PropTypes.arrayOf(PropTypes.string).isRequired,
});
