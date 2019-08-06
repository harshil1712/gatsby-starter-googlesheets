require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const buildCredentials = ({ PROJECT_ID, PRIVATE_KEY, PRIVATE_KEY_ID }) => ({
  type: 'service_account',
  project_id: PROJECT_ID,
  private_key_id: PRIVATE_KEY_ID,
  private_key: PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
  client_email: `fetchdata@${PROJECT_ID}.appspot.gserviceaccount.com`,
  client_id: '',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/fetchdata%40${PROJECT_ID}.appspot.gserviceaccount.com`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-google-spreadsheet`,
      options:{
        spreadsheetId:process.env.SPREADSHEET_ID,
        credentials:{
          client_email:process.env.CLIENT_EMAIL,
          private_key:process.env.PRIVATE_KEY
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
