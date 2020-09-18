<template>
  <nav class="z-30 flex h-12 shadow-xs 2xl bg-white">
    <ul class="flex items-center justify-between">
      <li
        v-for="(item, index) in menu"
        :key="index"
        v-tooltip.bottom="{
          content: item.tooltip,
          offset: 4,
          delay: { show: 0, hide: 0 },
        }"
        class="mx-2"
      >
        <g-link
          :to="item.to"
          :exact="item.to === '/'"
          class="cursor-pointer select-none border-b-2 border-transparent opacity-25 hover:opacity-100"
          active-class="border-current"
          exact-active-class="opacity-100"
        >
          {{ item.title }}
        </g-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from '@vue/composition-api'

export default defineComponent({
  setup(props, context) {
    const { menu } = useMenu(context)

    return { menu }
  },
})

function useMenu(context: SetupContext) {
  const menu = computed<{ title: string; to: string; tooltip?: string }[]>(
    () => [
      { title: 'Home', to: '/' },
      { title: 'Blog', to: '/blog/', tooltip: 'Under construction 🔨👷🚧' },
      { title: 'Portfolio', to: '/portfolio/' },
      {
        title: 'Résumé',
        to: context.root.$i18n.locale === 'en' ? '/resume' : '/lebenslauf',
      },
    ]
  )

  return { menu }
}
</script>
