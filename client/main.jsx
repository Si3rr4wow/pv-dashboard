import React from 'react';
import { hydrate } from 'react-dom';
import { Reload } from 'meteor/reload';
import { onPageLoad } from 'meteor/server-render';

import createStore from '/imports/redux/store';
import App from '/imports/ui/App'

// Disable refresh upon deploy
Reload._onMigrate(function () { return [false]; });

onPageLoad(() => {
  const { store, history } = createStore();

  hydrate(<App store={store} history={history} />, document.getElementById('react-target'));
});
