import React from 'react'
import Map from '../Map'
import VideosList from '../VideosList'
import './styles.scss'

const HomePage = React.createClass({
  render () {
    const { viewport, children, videoOpen } = this.props

    const mobileView = (
      <div className='eam-tabs mdl-tabs mdl-js-tabs mdl-js-ripple-effect'>
        <div className='mdl-tabs__tab-bar'>
          <a href='#list' className='mdl-tabs__tab'>
            <i className='material-icons'>view_list</i>
          </a>
          <a href='#map' className='mdl-tabs__tab is-active'>
            <i className='material-icons'>map</i>
          </a>
        </div>
        <div className='mdl-tabs__panel' id='list'>
          { children }
        </div>
        <div className='mdl-tabs__panel is-active' id='map'>
          <Map />
        </div>
      </div>
    )

    const desktopView = (
      <div>
        <Map />
        { children }
      </div>
    )

    return (
      <div>
        { viewport.isSmall ? mobileView : desktopView }
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
