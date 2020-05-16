import React, { useMemo } from 'react'

import { Spinner } from 'reactstrap'
import { Chart } from "react-google-charts";

import moment from 'moment'

import useAmps from '/imports/ui/subscriptions/use-amps'

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
    ampsLoading,
    amps
  } = useAmps(selector, { sort: { createdAt: 1 } })

  const ampChangeIndicator = amps.reduce((acc, { _id }) => acc + _id._str, '')

  const graphableAmps = useMemo(() => {
    const ampData = amps.map(dataPoint =>
      [
        moment(dataPoint.createdAt).format('HH:mm'),
        dataPoint.value || 0
      ]
    )
    return [['Time', 'Amps'], ...ampData]
  }, [ampChangeIndicator])

  if(ampsLoading && graphableAmps.length < 2) { return <Spinner/> }

  return (
    <Chart
      loader={<Spinner/>}
      data={graphableAmps}
      chartType="AreaChart"
      width="100%"/>
  )
}

export default Graphs
