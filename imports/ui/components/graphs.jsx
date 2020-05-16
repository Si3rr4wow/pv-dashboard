import React from 'react'

import { Container, Card, CardHeader, CardBody } from 'reactstrap'
import Gauges from './graphs/gauges'
import Areas from './graphs/areas'

const Graphs = () => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <h2 className="font-weight-light">Instantaneous</h2>
        </CardHeader>
        <CardBody>
          <Gauges/>
        </CardBody>
      </Card>

      <br/>

      <Card>
        <CardHeader>
          <h2 className="font-weight-light">This Hour</h2>
        </CardHeader>
        <CardBody>
          <Areas/>
        </CardBody>
      </Card>
    </Container>
  )
}

export default Graphs
