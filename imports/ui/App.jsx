import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import { Meteor } from 'meteor/meteor';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ConnectedRouter } from 'connected-react-router'

import routes from '../routes/routes';

const Router = Meteor.isClient ? ConnectedRouter : StaticRouter;

const App = ({ location, store, history }) => {
  return (
    <Provider store={store}>
      <Router location={location} history={history}>
        {renderRoutes(routes)}
      </Router>
    </Provider>
  );
};

App.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  store: PropTypes.object.isRequired
}

export default App;
