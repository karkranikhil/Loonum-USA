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
          families: ["Raleway-Medium", "Raleway-Light", "Raleway-Regular", "Raleway-SemiBold"],
          urls: ["/fonts/fonts.css"],
        },
      },
    }, {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://loonum.us18.list-manage.com/subscribe/post?u=1c79d007adc2c9959db6ad063&amp;id=45a7acc02d', // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167611854-1",
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ["Raleway"]
        }
      }
    },
    {
      resolve: `gatsby-plugin-minify`,
      options: {
        removeAttributeQuotes: true
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    }, {
        resolve: 'gatsby-plugin-preconnect',
        options: {
          domains: [
            { domain: 'www.google-analytics.com', crossOrigin: true },
            { domain: 'https://fonts.googleapis.com', crossOrigin: true },
            { domain: 'https://laughing-meitner-76e159.netlify.app', crossOrigin: true}
            ],
        },
      },
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'scss', 'js', 'svg', 'png']
      }
    },
    'gatsby-plugin-preload-link-crossorigin'
  ],
}
