import React from 'react'
import Map from '../Map'
import CountriesList from '../CountriesList'
import AccentsList from '../AccentsList'

export const HomeLayout = ({ viewport, countries }) => (
  <div>
    { viewport.isSmall ? null : <Map /> }
    {
      countries.selected
      ? <AccentsList countries={countries} />
      : <CountriesList />
    }
  </div>
)

HomeLayout.propTypes = {
  viewport: React.PropTypes.object,
  countries: React.PropTypes.object
}

export default HomeLayout
