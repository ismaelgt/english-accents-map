import React from 'react'
import Map from '../Map'
import CountriesList from '../CountriesList'
import AccentsList from '../AccentsList'

export const HomeLayout = ({ viewport, countries }) => (
  <div>
    {
      viewport.isSmall
        ? null
        : <Map countries={countries} />
    }
    {
      countries.selected
        ? <AccentsList selectedCountry={countries.selected} selectedAccent={countries.selectedAccent} />
        : <CountriesList countries={countries} />
    }
  </div>
)

HomeLayout.propTypes = {
  viewport: React.PropTypes.object,
  countries: React.PropTypes.object
}

export default HomeLayout
