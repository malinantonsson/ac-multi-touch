/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { RoundOne, RoundOneMap, RoundOneGrid } from '../rounds';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={RoundOne} />
          <Route path="/round-one/map" component={RoundOneMap} />
          <Route path="/round-one/grid" component={RoundOneGrid} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
