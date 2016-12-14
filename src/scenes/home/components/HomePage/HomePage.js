import React from 'react'
import Map from '../Map'
import VideosList from '../VideosList'
import './styles.scss'

const HomePage = React.createClass({
  componentDidMount () {
    this.initTabs()
  },

  componentDidUpdate (prevProps) {
    this.initTabs()
  },

  initTabs () {
    if (this.refs.tabs) {
      componentHandler.upgradeDom()
      this.refs.tabs.MaterialTabs.init()
    }
  },

  render () {
    const { online, viewport, children, accentSelected } = this.props
    let homeView = null

    const mobileViewWithTabs = (
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

    const mobileViewWithoutTabs = (
      <div className='eam-card-wrapper'>
        { children }
      </div>
    )

    const desktopView = (
      <div>
        { online ? <Map /> : null }
        <div className='eam-card-wrapper'>
          { children }
        </div>
      </div>
    )

    if (viewport.small) {
      if (!online || location.pathname.indexOf('favorites') > -1) {
        homeView = mobileViewWithoutTabs
      } else {
        homeView = mobileViewWithTabs
      }
    } else {
      homeView = desktopView
    }

    return (
      <div>
        { homeView }
        { accentSelected ? <VideosList /> : null }
      </div>
    )
  },
  propTypes: {
    online: React.PropTypes.bool,
    viewport: React.PropTypes.object,
    location: React.PropTypes.object,
    accentSelected: React.PropTypes.string,
    children: React.PropTypes.node
  }
})

export default HomePage
