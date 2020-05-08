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
        icon: './src/images/Icons/logo.png', // This path is relative to the root of the site.
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
    },{
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://loonum.us18.list-manage.com/subscribe/post?u=1c79d007adc2c9959db6ad063&amp;id=45a7acc02d', // add your MC list endpoint here; see instructions below
      },
    }],
}
