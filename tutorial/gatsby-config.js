/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata:{
    title:'Same Street',
    description:'Castro Valley Band',
    author:'@otsamestreet',
    simpleData:['item 1', 'item 2'],
    complexData:[
      { name: "grant", instrument: "trumpet" },
      { name: "jake", instrument: "trombone" },
      { name: "mark", instrument: "drums" },
      { name: "george", instrument: "guitar" },
      { name: "justin", instrument: "bass" },
    ]
  },
  plugins: 
    [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
    ],
}
