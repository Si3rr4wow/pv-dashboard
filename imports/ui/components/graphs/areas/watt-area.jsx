import React, { useMemo } from 'react'

import { Spinner } from 'reactstrap'
import { Chart } from "react-google-charts";

import moment from 'moment'

import useVolts from '/imports/ui/subscriptions/use-volts'
import useAmps from '/imports/ui/subscriptions/use-amps'

import useTime from '/imports/ui/hooks/use-time'

const findNearestAmp = (voltTime, amps) => {
  const testIndex = Math.floor(amps.length / 2)
  const left = amps[testIndex]
  const right = amps[testIndex + 1]
  const leftTime = left?.createdAt?.getTime()
  const rightTime = right?.createdAt?.getTime()
  if(!left) { return right }
  if(!right) { return left }
  if(voltTime > rightTime) {
    return findNearestAmp(voltTime, amps.slice(testIndex))
  }
  if(voltTime < leftTime) {
    return findNearestAmp(voltTime, amps.slice(0,testIndex))
  }
  if(voltTime > leftTime && voltTime < rightTime) {
    const nearest = voltTime - left > right - voltTime ? right : left
    return nearest
  }
}
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
  const {
    ampsLoading,
    amps
  } = useAmps(selector, { sort: { createdAt: 1 } })

  const voltChangeIndicator = volts.reduce((acc, { _id }) => acc + _id._str, '')
  const ampChangeIndicator = amps.reduce((acc, { _id }) => acc + _id._str, '')

  const graphableWatts = useMemo(() => {
    console.log(amps)
    const voltData = volts.map(dataPoint => {
      const nearestAmp = findNearestAmp(dataPoint.createdAt.getTime(), amps)
      console.log('NEARESTAMP', nearestAmp)
      return [
        moment(dataPoint.createdAt).format('HH:mm'),
        dataPoint.value * nearestAmp.value || 0
      ]
    })
    return [['Time', 'Watts'], ...voltData]
  }, [voltChangeIndicator, ampChangeIndicator])

  if((ampsLoading || voltsLoading) && graphableWatts.length < 2) { return <Spinner/> }

  return (
    <Chart
      loader={<Spinner/>}
      data={graphableWatts}
      chartType="AreaChart"
      width="100%"/>
  )
}

export default Graphs
