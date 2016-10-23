import React from 'react'
import Map from '../Map'

const HomePage = React.createClass({
  render () {
    const { viewport, children } = this.props
    return (
      <div>
        { viewport.isSmall ? null : <Map /> }
        { children }
      </div>
    )
  },
  propTypes: {
    viewport: React.PropTypes.object,
    children: React.PropTypes.node
  }
})

export default HomePage
