<template>
  <g-link
    v-bind="$attrs"
    class="inline-flex font-serif items-center px-1 bg-white border border-current rounded-md py-1/2 hover:shadow-button select-none"
  >
    <slot />
  </g-link>
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
