module.exports = {
  siteMetadata: {
    title: 'CADES - Célula Acadêmica de Desenvolvimento de Software',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark'
  ],
}
