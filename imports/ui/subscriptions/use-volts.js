import { useTracker } from 'meteor/react-meteor-data';
import subManager from './sub-manager';

import Volts from '/imports/api/meteor-models/volts';

const useVolts = (selector, options) => {
  const voltsLoading = useTracker(() => {
    const handle = subManager.subscribe('volts', selector, options);

    return !handle.ready();
  });

  const volts = useTracker(() => (
    Volts.find(selector, options).fetch()
  ));

  return {
    voltsLoading,
    volts
  };
};

export default useVolts;
