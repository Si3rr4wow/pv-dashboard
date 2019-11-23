/*eslint react/display-name:0*/

import React from 'react';

const withLayout = Layout => WrappedComponent => props => (
  <Layout>
    <WrappedComponent {...props} />
  </Layout>
);

export default withLayout;
