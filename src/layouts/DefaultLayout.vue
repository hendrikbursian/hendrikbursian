<template>
  <div class="flex flex-col bg-beige-100 text-beige-900 debug-screens">
    <Navbar />
    <slot />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
    Navbar,
  },
})
</script>

<style lang="stylus">
html
body
#app
  min-width 320px
  @apply overflow-x-hidden

#app
  @apply min-h-screen
</style>
