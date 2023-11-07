export const siteConfig = {
  name: 'Yash Godara',
  url: `${process.env.NEXT_PUBLIC_APP_URL}`,
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/og.png`,
  description: 'Personal website of Yash Godara, a developer based in India.',
  links: {
    twitter: 'https://twitter.com/y17godara',
    github: 'https://github.com/y17godara',
  },
};

export type SiteConfig = typeof siteConfig;
