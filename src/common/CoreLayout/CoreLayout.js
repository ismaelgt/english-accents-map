import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './styles.scss'

export const CoreLayout = ({ children }) => (
  <div className='eam-layout mdl-layout mdl-js-layout mdl-layout--fixed-header'>
    <header className='mdl-layout__header'>
      <div className='mdl-layout__header-row'>
        <Link to='/' className='mdl-layout-title'>
          <img className='eam-layout-title__icon' src='/images/eam_logo_24px.svg' />
          <span>English</span><strong>Accents</strong><span>Map</span>
        </Link>
      </div>
    </header>
    <div className='mdl-layout__drawer'>
      <nav className='mdl-navigation'>
        <Link to='/about' className='mdl-navigation__link'>Suggest an accent</Link>
        <Link to='/about' className='mdl-navigation__link'>See the code</Link>
      </nav>
    </div>
    <main className='mdl-layout__content'>
      {children}
    </main>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default CoreLayout
