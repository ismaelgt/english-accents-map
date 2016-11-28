import React from 'react'
import Map from '../Map'
import VideosList from '../VideosList'

const HomePage = React.createClass({
  render () {
    const { viewport, children, videoOpen } = this.props
    return (
      <div>
        { viewport.isSmall ? null : <Map /> }
        { videoOpen ? <VideosList /> : null }
        <div className='eam-card-wrapper'>
          { children }
        </div>
      </div>
    )
  },
  propTypes: {
    viewport: React.PropTypes.object,
    videoOpen: React.PropTypes.bool,
    children: React.PropTypes.node
  }
})

export default HomePage
