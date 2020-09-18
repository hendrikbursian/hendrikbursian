// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// NEEDS TO STAY ON TOP!
import 'typeface-oswald'
import 'typeface-eb-garamond'
import 'v-tooltip/dist/v-tooltip.css'
import '@/assets/tailwind.styl'
// NEEDS TO STAY ON TOP!

import VueCompositionApi from '@vue/composition-api'
import VTooltip from 'v-tooltip'
import { ClientApiConstructor } from './types/ClientApiConstructor'
import ButtonLink from '@/components/ButtonLink.vue';

const client: ClientApiConstructor = (Vue, { head }) => {
  Vue.use(VueCompositionApi)
  Vue.use(VTooltip)

  Vue.component('ButtonLink', ButtonLink)

  Vue.config.productionTip = false
  Vue.config.devtools = false

  head.htmlAttrs = {
    lang: 'en',
  }

  if (!head.meta) {
    head.meta = []
  }

  // TODO
  head.meta.push({
    name: 'author',
    content: 'Hendrik Bursian',
  })

  // TODO
  head.meta.push({
    name: 'keywords',
    content:
      'Hendrik Bursian,Web Developer,Web Development,JAM Stack,Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,Typescript,HTML,CSS,Vue.js,VueJS',
  })

  head.meta.push({
    name: 'description',
    content:
      'Welcome to my personal website. Take a look at my portfolio and my blog.',
  })

  // Open Graph + Twitter meta tags
  head.meta.push({
    property: 'og:description',
    content:
      'Welcome to my personal website. Take a look at my portfolio and my blog.',
  })

  head.meta.push({
    name: 'twitter:description',
    content:
      'Welcome to my personal website. Take a look at my portfolio and my blog.',
  })

  head.meta.push({
    property: 'og:type',
    content: 'website',
  })

  head.meta.push({
    property: 'og:title',
    content:
      'Hendrik Bursian - Web Developer for Websites and Web Applications with Vue, Typescript & Tailwindcss)',
  })

  head.meta.push({
    name: 'twitter:title',
    content:
      'Hendrik Bursian - Web Developer for Websites and Web Applications with Vue, Typescript & Tailwindcss',
  })

  // TODO
  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image',
  })

  // TODO
  // head.meta.push({
  //   name: 'twitter:creator',
  //   content: '@hendrikbursian',
  // })

  // TODO
  head.meta.push({
    property: 'og:image',
    content:
      'https://gridsome-starter-tulip.netlify.com/img/social-preview.png',
  })

  // TODO
  head.meta.push({
    name: 'twitter:image',
    content:
      'https://gridsome-starter-tulip.netlify.com/img/social-preview.png',
  })
}

export default client
