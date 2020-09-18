<template>
  <main
    class="flex flex-col flex-grow px-1 pt-1 pb-12 font-serif w-full lg:max-w-screen-md mx-auto"
  >
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({})
</script>
