import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import Map from '../Map'
import FavoritesList from '../FavoritesList'
import CountriesList from '../CountriesList'
import AccentsList from '../AccentsList'
import VideosList from '../VideosList'
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
    const { online, viewport, accentSelected } = this.props

    const router = (
      <Switch>
        <Route path='/favorites' component={FavoritesList} />
        <Route path='/:countryId/:accentId' component={AccentsList} />
        <Route path='/:countryId' component={AccentsList} />
        <Route exact path='/' component={CountriesList} />
      </Switch>
    )

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
            { router }
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
          { router }
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
  online: PropTypes.bool,
  viewport: PropTypes.object,
  accentSelected: PropTypes.string
}

export default HomePage
