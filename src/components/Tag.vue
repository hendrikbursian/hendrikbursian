<template>
  <div
    class="px-1 py-1/2 bg-beige-500 rounded-md whitespace-no-wrap select-none"
  >
    <span class="font-sans font-normal text-beige-600"># </span>
    <span class="text-beige-900 font-light font-sans lowercase"><slot /></span>
  </div>
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
