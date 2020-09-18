// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const Site = {
  siteName: 'Hendrik Bursian',
  siteUrl: 'https://hendrikbursian.netlify.app', // No trailing slash
  pathPrefix: '/', // Use starting and trailing slash
  titleTemplate: '%s  | Hendrik Bursian',
  icon: './src/favicon.png',
}

const Typescript = {
  use: 'gridsome-plugin-typescript',
}

const locales = require('./src/locales.json')

const I18n = {
  use: 'gridsome-plugin-i18n',
  options: {
    locales: ['en', 'de'],
    pathAliases: {},
    fallbackLocale: 'en', // fallback language
    defaultLocale: 'en', // default language
    enablePathRewrite: false, // rewrite path with locale prefix, default: true
    rewriteDefaultLanguage: false, // rewrite default locale, default: true
    enablePathGeneration: false,
    routes: {
      en: [{ path: '/resume', component: './src/pages/Resume.vue' }], // Set locale for Resume.vue
      de: [{ path: '/lebenslauf', component: './src/pages/Resume.vue' }],
    },
    messages: {
      de: locales.de,
      en: locales.en,
    },
  },
}

const SourcePortfolio = {
  use: '@gridsome/source-filesystem',
  options: {
    baseDir: 'content/portfolio',
    typeName: 'Portfolio',
    path: '**/*.md',
  },
}

const SourceMe = {
  use: '@gridsome/source-filesystem',
  options: {
    baseDir: 'content',
    typeName: 'Me',
    path: 'Me.md',
  },
}

const SourceSkills = {
  use: '@gridsome/source-filesystem',
  options: {
    baseDir: 'content',
    typeName: 'Skills',
    path: './*/Skills.yaml',
  },
}

const SourceEducation = {
  use: '@gridsome/source-filesystem',
  options: {
    baseDir: 'content',
    typeName: 'Education',
    path: './*/education/*.md',
  },
}

const SourceExperiencesBusiness = {
  use: '@gridsome/source-filesystem',
  options: {
    baseDir: 'content',
    typeName: 'ExperienceBusiness',
    path: './*/experiences-business/*.md',
  },
}

const TailwindCSS = {
  use: 'gridsome-plugin-tailwindcss',
  options: {
    tailwindConfig: './tailwind.config.js',
    purgeConfig: {},
    presetEnvConfig: {},
    shouldPurge: true,
    shouldImport: true,
    shouldTimeTravel: true,
  },
}

const CriticalCSS = {
  use: '@gridsome/plugin-critical',
  options: {
    paths: [Site.pathPrefix],
    width: 1024,
    height: 920,
  },
}

// const RSS = {
//   use: 'gridsome-plugin-rss',
//   options: {
//     contentTypeName: 'BlogPost',
//     feedOptions: {
//       // TODO
//       title: 'My Awesome Blog',
//       feed_url: `${Site.siteUrl}${Site.pathPrefix}rss.xml`,
//       site_url: Site.siteUrl,
//     },
//     feedItemOptions: (node) => ({
//       title: node.title,
//       description: node.description,
//       // TODO
//       url: `${Site.siteUrl}${Site.pathPrefix}post/${node.slug}`,
//       author: node.author,
//     }),
//     output: {
//       dir: './static',
//       name: 'rss.xml',
//     },
//   },
// }

const Sitemap = {
  use: '@gridsome/plugin-sitemap',
  options: {
    // exclude: ['/exclude-me'],
    // config: {
    //   '/articles/*': {
    //     changefreq: 'weekly',
    //     priority: 0.5,
    //     lastmod: '2020-02-19',
    //   },
    //   '/about': {
    //     changefreq: 'monthly',
    //     priority: 0.7,
    //     lastmod: '2020-05-12',
    //   },
    // },
  },
}

const PWA = {
  use: 'gridsome-plugin-pwa',
  options: {
    // Service Worker Options
    disableServiceWorker: false,
    serviceWorkerPath: 'service-worker.js',
    cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif,woff2',

    // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
    manifestPath: 'manifest.json',
    title: 'Hendrik Bursian',
    shortName: 'HB',
    startUrl: '/',
    display: 'fullscreen', // standalone, fullscreen, minimal-ui
    statusBarStyle: 'default',
    themeColor: '#ffffff',
    backgroundColor: '#ffffff',
    icon: 'src/favicon.png',
    maskableIcon: true, // Optional

    // Standard Meta Tags
    svgFavicon: '/favicon.svg', // Optional. Requires favicon.ico fallback

    // Microsoft Windows Meta Tags
    msTileColor: '#ffffff', // Optional

    // Apple MacOS Meta Tags
    appleMaskIcon: 'favicon.png', // Optional
    appleMaskIconColor: '#ffffff', // Optional
  },
}

const plugins = [
  //
  Typescript,
  I18n,
  SourceMe,
  SourcePortfolio,
  SourceEducation,
  SourceSkills,
  SourceExperiencesBusiness,
  TailwindCSS,
  // RSS,
  Sitemap,
]

if (process.env.NODE_ENV !== 'development') {
  plugins.push(
    //
    CriticalCSS,
    PWA
  )
}

const templates = {
  Portfolio: '/portfolio/:title/',
}

// prettier-ignore
module.exports = {
  ...Site,
  plugins,
  templates
};
