import React from 'react'
import Map from '../Map'
import VideosList from '../VideosList'

const HomePage = React.createClass({
  render () {
    const { viewport, children, accentSelected } = this.props
    return (
      <div>
        { viewport.isSmall ? null : <Map /> }
        { accentSelected ? <VideosList /> : null }
        <div className='eam-card-wrapper'>
          { children }
        </div>
      </div>
    )
  },
  propTypes: {
    viewport: React.PropTypes.object,
    accentSelected: React.PropTypes.string,
    children: React.PropTypes.node
  }
})

export default HomePage
