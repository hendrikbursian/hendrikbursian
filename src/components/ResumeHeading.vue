<template>
  <h2
    class="border-t border-black mt-4 font-resume-sans text-xs font-medium tracking-wider uppercase pt-1/2"
    style="break-before: left; break-after: avoid-page;"
  >
    <slot />
  </h2>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
