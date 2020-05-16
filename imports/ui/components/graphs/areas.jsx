import React from 'react'

import { Row, Col } from 'reactstrap'

import AmpArea from './areas/amp-area'
import VoltArea from './areas/volt-area'
import WattArea from './areas/watt-area'

const Graphs = () => {
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center">
          <VoltArea/>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <AmpArea/>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <WattArea/>
        </Col>
      </Row>
    </>
  )
}

export default Graphs
