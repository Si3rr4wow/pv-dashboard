import { Meteor } from 'meteor/meteor';

import Volts from '/imports/api/meteor-models/volts';

Meteor.publish('volts', (selector, options) => {
  return Volts.find({ ...selector, deletedAt: null }, options)
})
