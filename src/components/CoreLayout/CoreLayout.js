import React from 'react'
import { Link, IndexLink } from 'react-router'
import DocumentTitle from 'react-document-title'
import makeDocumentTitle from '../../services/documentTitle'
import { SNACKBAR_ELEMENT_ID } from '../../services/snackbar'
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

  render () {
    return (
      <div id='mdl-layout'
        className={'eam-layout mdl-layout mdl-js-layout mdl-layout--fixed-header ' +
          (this.props.online ? 'is-online' : 'is-offline')}
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
            <div className='mdl-layout__logo-wrapper'>
              <img className='mdl-layout__logo' src='/images/logo.svg' alt='English Accents Map' />
            </div>
            <span className='mdl-layout-title'>
              <span>English</span><strong>Accents</strong><span>Map</span>
            </span>
          </div>
          <nav className='mdl-navigation'>
            <div>
              <IndexLink to='/' className='mdl-navigation__link' activeClassName='is-active'>
                <i className='material-icons mdl-list__item-icon'>home</i> Home
              </IndexLink>
              { !this.props.smallScreen ? (
                <Link to='/favorites/' className='mdl-navigation__link' activeClassName='is-active'>
                  <i className='material-icons mdl-list__item-icon'>favorite</i> My favorites
                </Link>
              ) : null }
              <Link to='/suggest/' className='mdl-navigation__link' activeClassName='is-active'>
                <i className='material-icons mdl-list__item-icon'>add_location</i> Make a suggestion
              </Link>
            </div>
            <div>
              <a href='https://github.com/ismaelgt/english-accents-map' target='_blank'
                className='mdl-navigation__link'>
                <i className='material-icons mdl-list__item-icon'>code</i> See the code
              </a>
            </div>
          </nav>
        </div>
        <main className='mdl-layout__content'>
          {this.props.children}
        </main>
        <div id={SNACKBAR_ELEMENT_ID} className='mdl-js-snackbar mdl-snackbar'>
          <div className='mdl-snackbar__text' />
          <button className='mdl-snackbar__action' type='button' />
        </div>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  smallScreen: React.PropTypes.bool,
  location: React.PropTypes.object,
  online: React.PropTypes.bool,
  children: React.PropTypes.node
}

export default CoreLayout
