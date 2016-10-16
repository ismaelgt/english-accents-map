import React, { PropTypes } from 'react'
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
              <img className='eam-layout-title__icon' src='/images/eam_logo_24px.svg' />
              <span>English</span><strong>Accents</strong><span>Map</span>
            </Link>
          </div>
        </header>
        <div id='mdl-layout__drawer' className='mdl-layout__drawer' ref='drawer'>
          <nav className='mdl-navigation'>
            <Link to='/about' className='mdl-navigation__link'>Suggest an accent</Link>
            <Link to='/about' className='mdl-navigation__link'>See the code</Link>
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
  children: PropTypes.object.isRequired,
  location: PropTypes.object
}

export default CoreLayout
