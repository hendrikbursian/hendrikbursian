<template>
  <div
    class="absolute top-0 right-0 flex mr-2 transition-opacity duration-200 ease-out bg-opacity-50 opacity-75 select-none font-resume-sans mt-1/2 hover:opacity-100 print:hidden"
  >
    <MenuItem @click="print">
      <span class="inline-flex items-center justify-center">
        <Icons class="h-4" icon="printer" />
        <span>Print</span>
      </span>
    </MenuItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import MenuItem from '@/components/MenuItem.vue'
import Icons from '@/components/Icons.vue'

export default defineComponent({
  components: {
    MenuItem,
    Icons,
  },
  setup() {
    function print() {
      window.print()
    }
    return { print }
  },
})
</script>
