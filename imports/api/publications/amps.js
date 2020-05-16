import { Meteor } from 'meteor/meteor';

import Amps from '/imports/api/meteor-models/amps';

Meteor.publish('amps', (selector, options) => {
  return Amps.find({ ...selector, deletedAt: null }, options)
})
