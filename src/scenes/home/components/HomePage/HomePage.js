import React from 'react'
import Map from '../Map'
import VideosList from '../VideosList'
import FavoritesList from '../FavoritesList'
import LayoutClass from '../../../../components/LayoutClass'
import './styles.scss'

class HomePage extends React.Component {
  componentDidMount () {
    this.initTabs()
  }

  componentDidUpdate (prevProps) {
    this.initTabs()
  }

  initTabs () {
    if (this.refs.tabs) {
      componentHandler.upgradeDom()
      this.refs.tabs.MaterialTabs.init()
    }
  }

  render () {
    const { online, viewport, children, accentSelected } = this.props

    const mobileView = (
      <div ref='tabs' className='eam-tabs mdl-tabs mdl-js-tabs mdl-js-ripple-effect'>
        <LayoutClass name='no-shadow' />
        <div className='mdl-tabs__tab-bar'>
          { online ? (
            <a href='#map' className='mdl-tabs__tab is-active'>
              <i className='material-icons'>map</i>
            </a>
          ) : null }
          <a href='#list'
            className={'mdl-tabs__tab' + (!online ? ' is-active' : '')}>
            <i className='material-icons'>view_list</i>
          </a>
          <a href='#favorites'
            className={'mdl-tabs__tab' + (!online ? ' is-inactive' : '')}>
            <i className='material-icons'>favorite</i>
          </a>
        </div>
        { online ? (
          <div className='mdl-tabs__panel is-active' id='map'>
            <Map />
          </div>
        ) : null }
        <div id='list'
          className={'mdl-tabs__panel' + (!online ? ' is-active' : '')}>
          <div className='eam-card-wrapper'>
            { children }
          </div>
        </div>
        <div id='favorites'
          className={'mdl-tabs__panel' + (!online ? ' is-inactive' : '')}>
          <div className='eam-card-wrapper'>
            <FavoritesList />
          </div>
        </div>
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

    return (
      <div>
        { viewport.small ? mobileView : desktopView }
        { accentSelected ? <VideosList /> : null }
      </div>
    )
  }
}

HomePage.propTypes = {
  online: React.PropTypes.bool,
  viewport: React.PropTypes.object,
  accentSelected: React.PropTypes.string,
  children: React.PropTypes.node
}

export default HomePage
