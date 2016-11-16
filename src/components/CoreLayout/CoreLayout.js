import React from 'react'
import { Link } from 'react-router'
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
        <header className='mdl-layout__header'>
          <div className='mdl-layout__header-row'>
            <Link to='/' className='mdl-layout-title'>
              <img className='eam-layout-title__logo' src='/images/header-logo.png'
                srcSet='/images/header-logo.png 1x, /images/header-logo@2x.png 2x, /images/header-logo@3x.png 3x' />
              <span>English</span><strong>Accents</strong><span>Map</span>
            </Link>
            <div className='mdl-layout-spacer' />
          </div>
        </header>
        <div id='mdl-layout__drawer' className='mdl-layout__drawer' ref='drawer'>
          <nav className='mdl-navigation'>
            <Link to='https://github.com/ismaelgt/english-accents-map' target='_blank'
              className='mdl-navigation__link'>See the code</Link>
            <Link to='https://github.com/ismaelgt/english-accents-map/issues' target='_blank'
              className='mdl-navigation__link'>Report a bug</Link>
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
