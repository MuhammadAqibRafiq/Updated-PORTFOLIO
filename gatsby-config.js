module.exports = {
    plugins: [

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Portfolio`,
              short_name: `Portfolio`,
              start_url: `/`,
              background_color: `#ffffff`,
              theme_color: `#663399`,
              display: `standalone`,
              icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
          },

    ]
}