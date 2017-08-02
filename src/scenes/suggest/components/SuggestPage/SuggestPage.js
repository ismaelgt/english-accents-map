import React from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../../../../components/PageLayout'
import './styles.scss'

export const SuggestPage = () => (
  <PageLayout>
    <div className='mdl-card mdl-card--suggest mdl-shadow--8dp'>
      <div className='mdl-card__menu'>
        <Link to='/' className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'>
          <i className='material-icons'>close</i>
        </Link>
      </div>
      <div className='mdl-card__title'>
        <h2 className='mdl-card__title-text'>Make a suggestion</h2>
      </div>
      <div className='mdl-card__supporting-text'>
        <p>If you'd like to contribute with some feedback or suggest a new YouTube video for a particular accent,
          send an email to <a href='mailto:hello@englishaccentsmap.com' target='_blank'>hello@englishaccentsmap.com</a>.
        </p>
        <p>Thanks!</p>
      </div>
    </div>
  </PageLayout>
)

export default SuggestPage
