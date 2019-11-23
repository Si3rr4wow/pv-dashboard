import React from 'react'

import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import Paths from '/imports/routes/paths';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to={Paths.build.about()}>
      <Button>About</Button>
    </Link>
  </div>
)

export default Home
