module.exports = {
  siteMetadata: {
    title: 'Victor Chen',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-55579054-1',
        head: false,
        anonymize: true,
        respectDNT: true
      }
    }
  ]
}
