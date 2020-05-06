/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Loonum',
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Loonum',
        short_name: 'Loonum',
        start_url: '/',
        background_color: '#084E75',
        theme_color: '#084E75',
        display: 'minimal-ui',
        icon: 'src/images/icons/logo.png', // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["GothamLight,GothamMedium","GothamBook"],
          urls: ["/fonts/fonts.css"],
        },
      },
    }],
}
