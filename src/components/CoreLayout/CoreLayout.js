import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import makeDocumentTitle from '../../services/documentTitle'
import './styles.scss'

class CoreLayout extends React.Component {
  // On location change, if drawer is open, close it
  componentWillUpdate (nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      if (this.refs.drawer.classList.contains('is-visible')) {
        this.refs.layout.MaterialLayout.toggleDrawer()
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.online !== this.props.online) {
      this.refs.snackbar.MaterialSnackbar.showSnackbar({
        message: nextProps.online ? 'You are back online' : 'You\'ve gone offline'
      })
    }
  }

  render () {
    return (
      <div id='mdl-layout'
        className='eam-layout mdl-layout mdl-js-layout mdl-layout--fixed-header'
        ref='layout'>
        <DocumentTitle title={makeDocumentTitle()} />
        <header className='mdl-layout__header'>
          <div className='mdl-layout__header-row'>
            <Link to='/' className='mdl-layout-title'>
              <span>English</span><strong>Accents</strong><span>Map</span>
            </Link>
            <div className='mdl-layout-spacer' />
          </div>
        </header>
        <div id='mdl-layout__drawer' className='mdl-layout__drawer' ref='drawer'>
          <div className='mdl-layout__drawer-header'>
            <div className='mdl-layout__logo'>
              <img className='eam-layout-title__logo' src='/images/logo.png'
                srcSet='/images/logo.png 1x, /images/logo@2x.png 2x, /images/logo@3x.png 3x'
                alt='English Accents Map' />
            </div>
            <span className='mdl-layout-title'>
              <span>English</span><strong>Accents</strong><span>Map</span>
            </span>
          </div>
          <nav className='mdl-navigation'>
            <div>
              <Link to='/' className='mdl-navigation__link' activeClassName='is-active'>
                <i className='material-icons mdl-list__item-icon'>home</i> Home
              </Link>
              <Link to='/suggest/' className='mdl-navigation__link' activeClassName='is-active'>
                <i className='material-icons mdl-list__item-icon'>add_location</i> Make a suggestion
              </Link>
            </div>
          </nav>
        </div>
        <main className='mdl-layout__content'>
          {this.props.children}
        </main>
        <div ref='snackbar' className='mdl-js-snackbar mdl-snackbar'>
          <div className='mdl-snackbar__text' />
          <button className='mdl-snackbar__action' type='button' />
        </div>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  location: React.PropTypes.object,
  online: React.PropTypes.bool,
  children: React.PropTypes.node
}

export default CoreLayout
