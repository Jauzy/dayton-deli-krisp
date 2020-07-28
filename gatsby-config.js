module.exports = {
  siteMetadata: {
    title: `ConceptX`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-plugin-sass`,
  ]
}