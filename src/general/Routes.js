import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import LogoutPage from '../pages/auth/LogoutPage';
import NotFoundPage from '../pages/general/NotFoundPage';
import IndexPage from '../pages/home/index/IndexPage';
import EpisodesPage from '../pages/episode/EpisodesPage';
import EpisodeDetailPage from '../pages/episode/EpisodeDetailPage';
import LocationDetailPage from '../pages/location/LocationDetailPage';
import CharacterSearchPage from '../pages/character/search/CharacterSearchPage';
import GuardRoute from '../helpers/router/GuardRoute';
import GuestGuard from '../helpers/router/guards/GuestGuard';
import AuthenticatedGuard from '../helpers/router/guards/AuthenticatedGuard';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <GuardRoute exact path="/" component={<IndexPage />} />
        <GuardRoute
          exact
          path="/episode"
          guards={[AuthenticatedGuard()]}
          component={<EpisodesPage />}
        />
        <GuardRoute
          exact
          path="/episode/:id"
          guards={[AuthenticatedGuard()]}
          component={<EpisodeDetailPage />}
        />
        <GuardRoute
          exact
          path="/location/:id"
          guards={[AuthenticatedGuard()]}
          component={<LocationDetailPage />}
        />
        <GuardRoute
          exact
          path="/search"
          guards={[AuthenticatedGuard()]}
          component={<CharacterSearchPage />}
        />
        <GuardRoute
          exact
          path="/login"
          guards={[GuestGuard()]}
          component={<LoginPage />}
        />
        <GuardRoute
          exact
          path="/logout"
          guards={[AuthenticatedGuard()]}
          component={<LogoutPage />}
        />
        <GuardRoute exact path="*" component={<NotFoundPage />} />
      </Switch>
    </Router>
  );
}
