module.exports = {
  siteMetadata: {
    title: `SpaRiley.com`,
    description: `Welcome to Spa Riley, the Chagrin Valley's premier spa experience.`,
    author: `@nsmedira`,
    siteURL: 'https://spariley.com'
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
        icon: `src/images/favicon_multi.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-fontawesome-css`

    // 08.28.20 - ADD GOOGLE FONTS PREFETCH
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Playfair Display`,
    //         variants: ['400'] 
    //       }, 
    //       {
    //         family: `Lobster`
    //       }
    //     ]
    //   }
    // }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
