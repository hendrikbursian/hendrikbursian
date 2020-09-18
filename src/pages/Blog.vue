<template>
  <Layout>
    <div class="flex justify-center">
      <p class="prose prose-xl font-sans py-8 px-2 text-2xl">
        Hey there,<br />
        I'm currently constructing this page.<br />
        <br />
        🔨👷🚧<br />
        <br />
        Stay tuned.
      </p>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/layouts/DefaultLayout.vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
    Layout,
  },
})
</script>
