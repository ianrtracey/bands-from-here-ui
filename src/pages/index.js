import React from 'react'
import Link from 'gatsby-link'
import PopularGrid from '../layouts/popularGrid'
import { CitySelector } from '../layouts/citySelector.js'

const IndexPage = () => (
  <div className="w-100 center mv5 mh7">
    <h3>Celebrate Local Artists</h3>
    <h4>Discover playlists of local bands near you</h4>
    <div className="w-50 center">
    <CitySelector />
    </div>
    <PopularGrid />
  </div>
)

export default IndexPage
