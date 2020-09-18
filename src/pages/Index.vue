<template>
  <Layout>
    <main>
      Main
    </main>
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
