import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { useHistory, useLocation } from 'react-router-dom';
import QueryString from 'query-string';
import useDebounce from '../../../../helpers/general/useDebounce';

const CharacterSearchContainer = () => {
  const history = useHistory();
  const location = useLocation();
  const { name = '' } = QueryString.parse(location.search);
  const { focus } = {
    focus: false,
    ...location.state,
  };

  const handleSearchChange = useDebounce((event) => {
    const { value } = event.target;
    history.push(`/search?name=${value}`, { focus: true });
  }, 200);

  return (
    <InputBase
      autoFocus={focus}
      defaultValue={name}
      placeholder="Search character here..."
      inputProps={{ 'aria-label': 'search' }}
      onChange={handleSearchChange}
    />
  );
};

export default CharacterSearchContainer;
