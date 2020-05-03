import React from 'react'

const MainLayout = props => (
  <div style={{ borderTop: '4px solid var(--primary)' }}>
    <div className="py-2">
      {props.children}
    </div>
  </div>
)

export default MainLayout
