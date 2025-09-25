export const SITE = {
  name: 'Convertify',
  site: 'https://astrowind.vercel.app',
  base: '/',
  trailingSlash: false
};

export const GOOGLE_SITE_VERIFICATION_ID = 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M';

export const METADATA = {
  title: {
    default: 'Convertify',
    template: '%s — AppName'
  },
  description: "🚀 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    site_name: 'AppName',
    images: [
      {
        url: '',
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  },
  twitter: {
    handle: '@simon',
    site: '@simon',
    cardType: 'summary_large_image'
  }
};

export const I18N = {
  language: 'en',
  textDirection: 'ltr'
};

export const APPS = {
  blog: {
    isEnabled: true,
    postsPerPage: 6,
    post: {
      isEnabled: true,
      permalink: '/blog/%slug%',
      robots: {
        index: true
      }
    },
    list: {
      isEnabled: true,
      pathname: 'blog',
      robots: {
        index: true
      }
    },
    category: {
      isEnabled: true,
      pathname: 'blog/category',
      robots: {
        index: true
      }
    },
    tag: {
      isEnabled: true,
      pathname: 'blog/tag',
      robots: {
        index: false
      }
    },
    isRelatedPostsEnabled: true,
    relatedPostsCount: 4
  }
};

export const ANALYTICS = {
  vendors: {
    googleAnalytics: {
      id: null
    }
  }
};

export const UI = {
  theme: 'light:only'
};

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
