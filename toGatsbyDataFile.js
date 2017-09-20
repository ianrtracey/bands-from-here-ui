const data = require('./index.json');
const _ = require('lodash');
const fs = require('fs');

const slugs = new Set();

const makeSlug = ({ city, state }) => {
    const slug = `/${city} ${state}`
        .toLowerCase()
        .replace(' ', '-')

    if (slugs.has(slug)) {
        throw new Error(`duplicate slug ${slug}`)
    }
    slugs.add()

    return { slug, }
}

const cities = Object.keys(data)
    .map((cityId) => {
        const cityData = data[cityId]
        return (
            {
                city: cityData.city,
                state: cityData.state,
                spotifyPlaylistUri: cityData.playlist_id
            }
        )
    })
    .map((cityEntry) => (
        { ...makeSlug(cityEntry), ...cityEntry }
    ))
    .map((cityEntry) => (
        {
            value:
                {
                ...cityEntry
                },
            type: 'Cities'
        }
    ))

fs.writeFile('cities.json', JSON.stringify(cities), () => {
    console.log('file written')
});
