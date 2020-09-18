<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export type Tag = 'h1' | 'div'

export default defineComponent<{
  tag: Tag
  noAutoMargin: boolean
}>({
  props: {
    tag: { type: String, required: true },
    noAutoMargin: { type: Boolean, default: false },
  },

  render(h) {
    return h(
      this.$props.tag,
      {
        class: {
          'px-1': true,
          'mb-8  text-black font-sans text-5xl font-black leading-none':
            this.$props.tag === 'h1',
          'md:mx-auto': !this.$props.noAutoMargin,
        },
      },
      this.$slots.default
    )
  },

  setup() {
    return {}
  },
})
</script>

<style scoped></style>
