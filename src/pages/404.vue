<template>
  <Layout>
    <div class="text-center py-10">
      <p>Nothing here 🤷‍♂</p>
      <p class="mb-8">404</p>
      <a class="underline cursor-pointer" @click="$router.back()">Back</a>
      <span> 👈</span>
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
