<template>
  <div class="flex flex-col">
    <Navbar class="print:hidden" />
    <div class="relative overflow-x-auto font-resume-serif">
      <LanguageSwitcher />
      <PrintButton />

      <main
        v-link-indicators="'#c53030'"
        class="flex flex-col flex-grow px-12 py-16 mx-auto w-content"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import 'typeface-martel'
import 'typeface-montserrat'

import Vue from 'vue'
import { defineComponent } from '@vue/composition-api'
import VLinkIndicators from '@/plugins/link-indicators'
Vue.use(VLinkIndicators)

import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import Navbar from '@/components/Navbar.vue'
import PrintButton from '@/components/PrintButton.vue'

export default defineComponent({
  components: {
    Navbar,
    LanguageSwitcher,
    PrintButton,
  },
})
</script>

<style lang="stylus">
body
#app
  min-width 320px
  @apply overflow-x-hidden h-full

.key
  padding-top .1rem
  padding-bottom .1rem
  @apply font-resume-sans font-normal text-gray-700 border-b border-gray-500 bg-gray-400 px-1 bg-opacity-50 rounded-md

@media print
  .no-print
    display none
</style>
