import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DefaultLayout from '../../../features/layout/layout/DefaultLayout';
import { characterPageStyles } from './styles/CharacterPageStyles';
import CharacterListContainer from '../../../features/character/list/components/list/CharacterListContainer';

const useStyles = makeStyles(characterPageStyles);

export default function EpisodesPage() {
  const classes = useStyles();

  return (
    <DefaultLayout>
      <div className={classes.container}>
        <div className={classes.box}>
          <CharacterListContainer />
        </div>
      </div>
    </DefaultLayout>
  );
}
