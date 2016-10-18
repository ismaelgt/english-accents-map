import React from 'react'
import Map from '../Map'
import CountriesList from '../CountriesList'
import AccentsList from '../AccentsList'

export const HomeLayout = ({ viewport, countries, accents }) => (
  <div>
    { viewport.isSmall ? null : <Map /> }
    {
      countries.selected
        ? <AccentsList countries={countries} accents={accents} />
        : <CountriesList countries={countries} />
    }
  </div>
)

HomeLayout.propTypes = {
  viewport: React.PropTypes.object,
  countries: React.PropTypes.object,
  accents: React.PropTypes.object
}

export default HomeLayout
