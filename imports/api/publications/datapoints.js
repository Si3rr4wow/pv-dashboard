import { Meteor } from 'meteor/meteor';

import DataPoints from '/imports/api/meteor-models/datapoints';

Meteor.publish('datapoints', (selector, options) => {
  return DataPoints.find({ ...selector, deletedAt: null }, options)
})
