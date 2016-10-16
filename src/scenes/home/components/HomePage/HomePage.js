import React from 'react'
import Map from '../Map'
import CountriesList from '../CountriesList'

export const HomeLayout = ({ viewport }) => (
  <div>
    { viewport.isSmall ? null : <Map /> }
    <CountriesList />
  </div>
)

HomeLayout.propTypes = {
  viewport: React.PropTypes.object
}

export default HomeLayout
