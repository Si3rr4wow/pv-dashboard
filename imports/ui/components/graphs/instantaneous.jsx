import React from 'react'

import { Row, Col } from 'reactstrap'

import AmpGauge from './gauges/amp-gauge'
import VoltGauge from './gauges/volt-gauge'

const Graphs = () => {
  return (
    <Row>
      <Col>
        <AmpGauge/>
      </Col>
      <Col>
        <VoltGauge/>
      </Col>
    </Row>
  )
}

export default Graphs
