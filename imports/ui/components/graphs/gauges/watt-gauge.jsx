import React from 'react'

import { Spinner } from 'reactstrap'
import { Chart } from "react-google-charts";

import useVolts from '/imports/ui/subscriptions/use-volts'
import useAmps from '/imports/ui/subscriptions/use-amps'

const Graphs = () => {
  const {
    voltsLoading,
    volts
  } = useVolts({ }, { sort: { createdAt: -1 }, limit: 1 })
  const {
    ampsLoading,
    amps
  } = useAmps({ }, { sort: { createdAt: -1 }, limit: 1 })

  if(voltsLoading || ampsLoading) { return <Spinner/> }

  return (
    <Chart
      loader={<Spinner/>}
      data={[
        ['Label', 'Value'],
        ['Watts', volts?.[0]?.value * amps?.[0]?.value || 0]
      ]}
      chartType="Gauge"
      max="500"/>
  )
}

export default Graphs
