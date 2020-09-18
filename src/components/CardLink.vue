<template>
  <g-link
    v-if="to"
    :to="to"
    class="flex flex-col bg-white shadow rounded-md overflow-hidden"
  >
    <slot />
  </g-link>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  components: {},

  props: {
    to: { type: String, required: true },
  },

  setup() {
    const classes = ref()

    return { classes }
  },
})
</script>
