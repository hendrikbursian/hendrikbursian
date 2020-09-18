<template>
  <video
    v-if="node.video"
    class="w-full h-full transform origin-center group-hover:scale-150 transition group-hover:duration-11111 duration-200 ease-linear"
    :class="{
      'object-cover': size === 'cover',
      'object-contain': size === 'contain',
    }"
    :src="node.video.src"
    autoplay
    muted
    loop
  >
    <template v-if="node.image">
      <img
        :src="node.image.src"
        :alt="node.title"
        :srcset="node.image.srcset"
        :sizes="node.image.sizes"
        class="w-full h-full"
        :class="{
          'object-cover': size === 'cover',
          'object-contain': size === 'contain',
        }"
      />
    </template>

    <template v-else>
      <span>
        Your browser doesn't support <em>{{ node.video.mimeType }}</em> video
        files :( You might want to update your browser or try a different one.
      </span>
    </template>
  </video>

  <img
    v-else-if="node.image"
    :src="node.image.src"
    :alt="node.title"
    :srcset="node.image.srcset"
    :sizes="node.image.sizes"
    class="h-full w-full"
    :class="{
      'object-cover': size === 'cover',
      'object-contain': size === 'contain',
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Portfolio } from '@/types/Gridsome.gql'

export default defineComponent({
  props: {
    node: { type: Object as () => Portfolio },
    size: { type: String as () => 'cover' | 'contain', default: 'cover' },
  },
})
</script>

<style scoped></style>
