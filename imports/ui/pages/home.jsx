import React from 'react'

import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Graphs from '/imports/ui/components/graphs'

import Paths from '/imports/routes/paths';

const Home = () => (
  <div>
    <h1 className="text-center font-weight-light">Dashboard</h1>
    <Graphs/>
    <div className="fixed-bottom">
      <Link to={Paths.build.about()}>
        <Button color="link">About</Button>
      </Link>
    </div>
  </div>
)

export default Home
