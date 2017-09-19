import React from 'react';
import Select from 'react-select'
import Link from 'gatsby-link';
import 'react-select/dist/react-select.css';


const state = {
    options: [
        {
            value: <a href="/san-francisco-ca" />,
            label: 'Austin, TX'
        }
    ],
    value: '',
    label: 'pick a city',
}


export const CitySelector = () => (
      <Select
        name="form-field-name"
        value={state.value}
        options={state.options}
        onChange={goToCityPlaylist}
      />
)
const goToCityPlaylist = (e) => {
    console.dir(e)
    window.open(e.value, '_blank');
}