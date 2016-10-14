import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './styles.scss'

export const CoreLayout = ({ children }) => (
  <div className='eam-layout mdl-layout mdl-js-layout mdl-layout--fixed-header'>
    <header className='mdl-layout__header'>
      <div className='mdl-layout__header-row'>
        <Link to='/' className='mdl-layout-title'>
          <img className='eam-layout-title__icon' src='/images/eam_logo_24px.svg' />
          <span>English</span>
          <strong>Accents</strong>
          <span>Map</span>
        </Link>
        <div className='mdl-layout-spacer' />
        <nav className='mdl-navigation mdl-layout--large-screen-only'>
          <Link to='/about' className='mdl-navigation__link'>About</Link>
        </nav>
      </div>
    </header>
    <main className='mdl-layout__content'>
      {children}
    </main>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default CoreLayout
