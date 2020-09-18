<template>
  <div
    :class="{
      'text-black': active,
      'text-gray-500': !active,
    }"
    tabindex="0"
    class="focus:text-black focus:outline-none mr-1/2 font-resume-sans font-medium px-1 cursor-pointer rounded-md transition-colors duration-200 ease-out hover:bg-beige-500 hover:bg-opacity-75 hover:text-black last:mr-0"
    style="font-variant-caps: all-small-caps;"
    v-on="$listeners"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {}
  },
})
</script>
