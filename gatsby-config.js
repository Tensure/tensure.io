module.exports = {
  siteMetadata: {
    title: `Tensure.io Consulting`,
    description: `Boutique consultation firm with a focus on social impact.`,
    author: `Team Tensure`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          ...allFeatures
        },
        credentials: {
          apiKey: "AIzaSyAfypMxb9xICs_cU3cqsCKXBUYLBaBekpM",
          authDomain: "tensuredotio.firebaseapp.com",
          databaseURL: "https://tensuredotio.firebaseio.com",
          projectId: "tensuredotio",
          storageBucket: "tensuredotio.appspot.com",
          messagingSenderId: "345001518488",
          appId: "1:345001518488:web:81ea7f8d347feea5bf37ed",
          measurementId: "G-1PXNEP64Q8"
        }
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: true,
          database: true,
          firestore: false,
          storage: false,
          messaging: false,
          functions: true,
          performance: false
        }
      }
    }
  ]
};
