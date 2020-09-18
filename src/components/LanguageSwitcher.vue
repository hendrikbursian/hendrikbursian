<template>
  <div
    class="font-resume-sans absolute top-0 left-0 flex transition-opacity duration-200 ease-out bg-opacity-50 opacity-75 select-none ml-5 mt-1/2 hover:opacity-100 print:hidden"
  >
    <MenuItem
      v-for="locale in $i18n.availableLocales"
      :key="locale"
      :active="isActiveLocale(locale)"
      @click="localeChanged(locale)"
    >
      {{ translateLocale(locale) }}
    </MenuItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import MenuItem from '@/components/MenuItem.vue'

export default defineComponent({
  components: {
    MenuItem,
  },

  setup(props, context) {
    const localeTranslations: { [locale: string]: string } = {
      en: 'English',
      de: 'Deutsch',
    }

    function translateLocale(locale: string): string {
      return localeTranslations[locale]
    }

    function isActiveLocale(locale: string) {
      return context.root.$i18n.locale === locale
    }

    function localeChanged(locale: string) {
      if (isActiveLocale(locale)) return

      const path = locale === 'en' ? '/resume' : '/lebenslauf'

      context.root.$router.push({ path })
    }

    return { translateLocale, isActiveLocale, localeChanged }
  },
})
</script>
