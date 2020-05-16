import React from 'react'

import { Spinner } from 'reactstrap'
import { Chart } from "react-google-charts";

import useAmps from '/imports/ui/subscriptions/use-amps'

const Graphs = () => {
  const {
    ampsLoading,
    amps
  } = useAmps({ }, { sort: { createdAt: -1 }, limit: 1 })

  if(ampsLoading) { return <Spinner/> }

  return (
    <Chart
      loader={<Spinner/>}
      data={[
        ['Label', 'Value'],
        ['Amps', amps?.[0]?.value || 0]
      ]}
      chartType="Gauge"/>
  )
}

export default Graphs
