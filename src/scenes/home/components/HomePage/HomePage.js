import React from 'react'
import Map from '../Map'
import VideosList from '../VideosList'
import './styles.scss'

const HomePage = React.createClass({
  componentDidUpdate (prevProps) {
    if (prevProps.viewport.isSmall !== this.props.viewport.isSmall && this.props.viewport.isSmall) {
      componentHandler.upgradeDom()
      this.refs.tabs.MaterialTabs.init()
    }
  },
  render () {
    const { viewport, children, accentSelected } = this.props

    const mobileView = (
      <div ref='tabs' className='eam-tabs mdl-tabs mdl-js-tabs mdl-js-ripple-effect'>
        <div className='mdl-tabs__tab-bar'>
          <a href='#map' className='mdl-tabs__tab is-active'>
            <i className='material-icons'>map</i>
          </a>
          <a href='#list' className='mdl-tabs__tab'>
            <i className='material-icons'>view_list</i>
          </a>
        </div>
        <div className='mdl-tabs__panel is-active' id='map'>
          <Map />
        </div>
        <div className='mdl-tabs__panel' id='list'>
          <div className='eam-card-wrapper'>
            { children }
          </div>
        </div>
      </div>
    )

    const desktopView = (
      <div>
        <Map />
        <div className='eam-card-wrapper'>
          { children }
        </div>
      </div>
    )

    return (
      <div>
        { viewport.isSmall ? mobileView : desktopView }
        { accentSelected ? <VideosList /> : null }
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
