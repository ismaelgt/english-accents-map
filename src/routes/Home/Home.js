import React from 'react'
import Map from '../../components/Map/Map'
import PageLayout from '../../layouts/PageLayout/PageLayout'
import { Link } from 'react-router'

export const Home = () => (
  <div>
    <Map />
    <PageLayout>
      <div className='mdl-card mdl-shadow--2dp'>
        <div className='mdl-card__title'>
          <h2 className='mdl-card__title-text'>Select country</h2>
        </div>
        <ul className='mdl-card__supporting-text demo-list-item mdl-list'>
          <li className='mdl-list__item'>
            <span className='mdl-list__item-primary-content'>
              <Link to='/about' className='mdl-link'>United Kingdom</Link>
            </span>
          </li>
          <li className='mdl-list__item'>
            <span className='mdl-list__item-primary-content'>
              <Link to='/about' className='mdl-link'>United States</Link>
            </span>
          </li>
          <li className='mdl-list__item'>
            <span className='mdl-list__item-primary-content'>
              <Link to='/about' className='mdl-link'>Ireland</Link>
            </span>
          </li>
          <li className='mdl-list__item'>
            <span className='mdl-list__item-primary-content'>
              <Link to='/about' className='mdl-link'>Australia</Link>
            </span>
          </li>
        </ul>
      </div>
    </PageLayout>
  </div>
)

export default Home
