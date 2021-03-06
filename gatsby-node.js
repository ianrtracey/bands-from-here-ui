const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(`
        {
  allCitiesJson {
    edges {
      node {
        value {
          city
          state
          slug
          spotifyPlaylistUri
        }
      }
    }
  }
}
        `).then(result => {
            result.data.allCitiesJson.edges.map(({ node }) => {
                createPage({
                    path: node.value.slug,
                    component: path.resolve('./src/templates/city-page.js'),
                    context: {
                        slug: node.value.slug,
                    },
                })
            })
            resolve()
        })
    })
}