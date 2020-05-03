import React from 'react'

import { Spinner } from 'reactstrap'
import { Chart } from "react-google-charts";

import useDataPoints from '/imports/ui/subscriptions/use-datapoints'

const Graphs = () => {
  const {
    dataPointsLoading,
    dataPoints
  } = useDataPoints({ type: 'volt' }, { sort: { createdAt: -1 }, limit: 1 })

  if(dataPointsLoading) { return <Spinner/> }

  return (
    <Chart
      loader={<Spinner/>}
      data={[
        ['Label', 'Value'],
        ['Volts', dataPoints[0]?.value || 0]
      ]}
      chartType="Gauge"/>
  )
}

export default Graphs
