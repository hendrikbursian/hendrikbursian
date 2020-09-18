<template>
  <Layout>Hey there!</Layout>
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
