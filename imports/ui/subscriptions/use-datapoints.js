import { useTracker } from 'meteor/react-meteor-data';
import subManager from './sub-manager';

import DataPoints from '/imports/api/meteor-models/datapoints';

const useDataPoints = (selector, options) => {
  const dataPointsLoading = useTracker(() => {
    const handle = subManager.subscribe('datapoints', selector, options);

    return !handle.ready();
  });

  const dataPoints = useTracker(() => (
    DataPoints.find(selector, options).fetch()
  ));

  return {
    dataPointsLoading,
    dataPoints
  };
};

export default useDataPoints;
