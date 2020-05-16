import React from 'react'

import { Spinner } from 'reactstrap'
import { Chart } from "react-google-charts";

import useVolts from '/imports/ui/subscriptions/use-volts'

const Graphs = () => {
  const {
    voltsLoading,
    volts
  } = useVolts({ }, { sort: { createdAt: -1 }, limit: 1 })

  if(voltsLoading) { return <Spinner/> }

  return (
    <Chart
      loader={<Spinner/>}
      data={[
        ['Label', 'Value'],
        ['Volts', volts?.[0]?.value || 0]
      ]}
      chartType="Gauge"/>
  )
}

export default Graphs
