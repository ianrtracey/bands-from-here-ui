import React from 'react';
import Select from 'react-select'
import Link from 'gatsby-link';
import 'react-select/dist/react-select.css';
import { navigateTo } from "gatsby-link"
const cityData = require('../../data/cities.json')
console.log(cityData)

const buildDropdownItems = () => {
    return cityData.map((entry) => {
        const { slug, city, state } = entry.value;
        return { 
            value: slug,
            label: `${city}, ${state}`,
        }
    })
}
console.log(buildDropdownItems())


const state = {
    options: buildDropdownItems(),
    value: '',
    label: 'pick a city',
}




export const CitySelector = ({ data }) => {
    console.log(state)
      return ( <Select
        name="form-field-name"
        value={state.value}
        options={state.options}
        onChange={goToCityPlaylist}
      />
      )
}
const goToCityPlaylist = (e) => {
    navigateTo(e.value)
}