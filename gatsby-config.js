module.exports = {
  siteMetadata: {
    title: `Unlimited Words`,
    name: `Unlimted Words`,
    siteUrl: `https://google.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Unlimited Words, bringing you science and faith`,
      maxWidth: 852,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        allContentfulAuthor: true,
        sources: {
          local: true,
          contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Unlimited Words`,
        short_name: `Unlimted Words`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
