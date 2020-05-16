import React, { useMemo } from 'react'

import { Spinner } from 'reactstrap'
import { Chart } from "react-google-charts";

import moment from 'moment'

import useVolts from '/imports/ui/subscriptions/use-volts'

import useTime from '/imports/ui/hooks/use-time'

const Graphs = () => {
  const time = useTime(1000)

  const selector = useMemo(() => {
    return {
      createdAt: {
        $lte: time,
        $gte: moment(time).subtract(1, 'hour').toDate()
      }
    }
  }, [time.getTime()])

  const {
    voltsLoading,
    volts
  } = useVolts(selector, { sort: { createdAt: 1 } })

  const voltChangeIndicator = volts.reduce((acc, { _id }) => acc + _id._str, '')

  const graphableVolts = useMemo(() => {
    const voltData = volts.map(dataPoint =>
      [
        moment(dataPoint.createdAt).format('HH:mm'),
        dataPoint.value || 0
      ]
    )
    return [['Time', 'Volts'], ...voltData]
  }, [voltChangeIndicator])

  if(voltsLoading && graphableVolts.length < 2) { return <Spinner/> }

  return (
    <Chart
      loader={<Spinner/>}
      data={graphableVolts}
      chartType="AreaChart"
      width="100%"/>
  )
}

export default Graphs
