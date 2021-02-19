import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function GuardRoute({ guards = [], component, ...props }) {
  const RenderGuard = useCallback(
    function RenderGuard(props) {
      return React.cloneElement(component, props);
    },
    [component]
  );
  const pipeGuards = useCallback((guards, initialGuard) => {
    return guards.reverse().reduce((wrappedGuard, nextGuard) => {
      return nextGuard(wrappedGuard);
    }, initialGuard);
  }, []);

  const WrappedComponent = useMemo(
    () => (guards.length === 0 ? RenderGuard : pipeGuards(guards, RenderGuard)),
    [guards, pipeGuards, RenderGuard]
  );

  return (
    <Route
      {...props}
      render={(renderProps) => {
        return <WrappedComponent {...renderProps} />;
      }}
    />
  );
}

GuardRoute.propTypes = {
  guards: PropTypes.arrayOf(PropTypes.func),
  component: PropTypes.node,
};
