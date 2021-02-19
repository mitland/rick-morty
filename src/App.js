import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './general/Routes';
import ErrorBoundary from './general/ErrorBoundary ';

function App() {
  return (
    <>
      <CssBaseline />
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </>
  );
}

export default App;
