import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data';

import Amps from '/imports/api/meteor-models/amps';

const useAmps = (selector, options) => {
  const ampsLoading = useTracker(() => {
    const handle = Meteor.subscribe('amps', selector, options);

    return !handle.ready();
  });

  const amps = useTracker(() => (
    Amps.find(selector, options).fetch()
  ));

  return {
    ampsLoading,
    amps
  };
};

export default useAmps;
