import React from 'react'
import Map from '../../../common/Map'
import PageLayout from '../../../common/PageLayout'
import CountriesListContainer from '../CountriesList'

export const HomeLayout = () => (
  <div>
    <Map />
    <PageLayout>
      <CountriesListContainer />
    </PageLayout>
  </div>
)

export default HomeLayout
