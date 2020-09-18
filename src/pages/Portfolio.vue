<template>
  <Layout>
    <Main>
      <h1 class="text-4xl font-medium text-black">My Portfolio</h1>
      <p class="mb-12 text-lg">
        Welcome to my portfolio. Below is a selection of my work.
        <br />
        <em class="text-beige-700">
          Click the cards to get details about a project.
        </em>
      </p>

      <PortfolioItem
        v-for="edge in $page.allPortfolio.edges"
        :key="edge.node.id"
        :node="edge.node"
      />
    </Main>
  </Layout>
</template>

<page-query>
query {
  allPortfolio {
    edges {
      node {
        id
        title
        video
        excerpt
        tags
        path
      }
    }
  }
}
</page-query>

<script>
import Layout from '@/layouts/DefaultLayout.vue'
import { defineComponent } from '@vue/composition-api'
import PortfolioItem from '@/components/PortfolioItem.vue'
import Main from '@/components/Main.vue'

export default defineComponent({
  components: {
    Layout,
    PortfolioItem,
    Main,
  },

  metaInfo() {
    return {
      title: 'Portfolio',
    }
  },
})
</script>
