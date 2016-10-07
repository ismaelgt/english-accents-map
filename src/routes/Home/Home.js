import React from 'react'
import Map from '../../components/Map/Map'
import PageLayout from '../../layouts/PageLayout/PageLayout'

export const Home = () => (
  <div>
    <Map></Map>
    <PageLayout>
      <div className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Select region</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <ul className="demo-list-item mdl-list">
            <li className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
                United States of America
              </span>
            </li>
            <li className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
                United Kingdom
              </span>
            </li>
            <li className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
                Australia
              </span>
            </li>
          </ul>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Get Started
          </a>
        </div>
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i className="material-icons">share</i>
          </button>
        </div>
      </div>
    </PageLayout>
  </div>
)

export default Home
