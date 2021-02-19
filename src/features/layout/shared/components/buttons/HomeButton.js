import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import BasicButton from './BasicButton';

const HomeButton = (props) => {
  return (
    <BasicButton {...props} to="/">
      <HomeIcon />
    </BasicButton>
  );
};

export default HomeButton;
