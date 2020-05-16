import React from 'react'

import { Row, Col } from 'reactstrap'

import AmpGauge from './gauges/amp-gauge'
import VoltGauge from './gauges/volt-gauge'
import WattGauge from './gauges/watt-gauge'

const Graphs = () => {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <AmpGauge/>
      </Col>
      <Col className="d-flex justify-content-center">
        <VoltGauge/>
      </Col>
      <Col className="d-flex justify-content-center">
        <WattGauge/>
      </Col>
    </Row>
  )
}

export default Graphs
