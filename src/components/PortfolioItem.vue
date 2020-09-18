<template>
  <CardLink
    :to="node.path"
    class="group max-w-sm select-none transform shadow hover:shadow-lg hover:-translate-y-1 transition duration-200 ease-out"
  >
    <div class="relative h-48 bg-gray-300 overflow-hidden">
      <div
        class="absolute left-0 top-0 right-0 bottom-0 bg-beige-700 bg-opacity-50 z-10 pointer-events-none"
      ></div>
      <PortfolioCover :node="node" />
    </div>

    <div class="px-4 mb-6 mt-6">
      <h2
        class="mb-6 font-sans text-3xl text-black font-black leading-none xs:mt-0"
      >
        {{ node.title }}
      </h2>

      <!-- <div class="flex flex-wrap mb-2">
        <Tag v-for="tag in node.tags" :key="tag" class="mr-2 text-sm">{{
          tag
        }}</Tag>
      </div> -->

      <div class="prose">
        <p>{{ node.excerpt }}</p>
      </div>

      <div class="flex justify-end mt-2">
        <ButtonLink :to="node.path">
          <span>Details</span>
          <Icons class="h-4" icon="chevron-right" />
        </ButtonLink>
      </div>
    </div>
  </CardLink>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Tag from '@/components/Tag.vue'
import Icons from '@/components/Icons.vue'
import MenuItem from '@/components/MenuItem.vue'
import CardLink from '@/components/CardLink.vue'
import PortfolioCover from '@/components/PortfolioCover.vue'

export default defineComponent({
  inheritAttrs: true,
  components: {
    Tag,
    Icons,
    MenuItem,
    CardLink,
    PortfolioCover,
  },

  props: {
    node: { type: Object, required: true },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
