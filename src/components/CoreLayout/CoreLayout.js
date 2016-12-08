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

  render () {
    return (
      <div id='mdl-layout'
        className='eam-layout mdl-layout mdl-js-layout mdl-layout--fixed-header'
        ref='layout'>
        <DocumentTitle title={makeDocumentTitle()} />
        <header className='mdl-layout__header'>
          <div className='mdl-layout__header-row'>
            <Link to='/' className='mdl-layout-title'>
              <img className='eam-layout-title__logo' src='/images/header-logo.png'
                srcSet='/images/header-logo.png 1x, /images/header-logo@2x.png 2x, /images/header-logo@3x.png 3x'
                alt='English Accents Map' />
              <span>English</span><strong>Accents</strong><span>Map</span>
            </Link>
            <div className='mdl-layout-spacer' />
          </div>
        </header>
        <div id='mdl-layout__drawer' className='mdl-layout__drawer' ref='drawer'>
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
      </div>
    )
  }
}

CoreLayout.propTypes = {
  location: React.PropTypes.object,
  children: React.PropTypes.node
}

export default CoreLayout
