import React from 'react'

import { Container, Card, CardHeader, CardBody } from 'reactstrap'
import Instantaneous from './graphs/instantaneous'

const Graphs = () => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <h2 className="font-weight-light">Instantaneous</h2>
        </CardHeader>
        <CardBody>
          <Instantaneous/>
        </CardBody>
      </Card>
    </Container>
  )
}

export default Graphs
