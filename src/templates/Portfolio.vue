<template>
  <Layout>
    <div class="flex items-center py-2 px-2 bg-white shadow">
      <ButtonLink to="/portfolio" class="mr-2">
        <Icons class="h-4 transform rotate-180" icon="chevron-right" />
        <span>Back</span>
      </ButtonLink>

      <!-- <div class="flex items-center font-serif"> -->
      <!-- <Icons icon="chevron-right" class="h-3" /> -->
      <!-- <span>{{ $page.portfolio.title }}</span> -->
      <!-- </div> -->
    </div>

    <Main>
      <div class="bg-white shadow py-2 lg:p-8">
        <Block tag="h1">{{ $page.portfolio.title }}</Block>

        <Block tag="div" class="flex flex-wrap mb-6">
          <Tag v-for="tag in $page.portfolio.tags" :key="tag" class="mr-2 mb-2">
            {{ tag }}
          </Tag>
        </Block>

        <div
          class="bg-beige-900 border-4 border-t-8 border-b-8 border-beige-900 mb-8"
        >
          <PortfolioCover
            :node="$page.portfolio"
            size="contain"
            style="max-height: 40vh;"
          />
        </div>

        <!-- eslint-disable vue/no-v-html -->
        <Block
          tag="div"
          class="prose lg:prose-xl"
          v-html="$page.portfolio.content"
        />
        <!-- eslint-enable vue/no-v-html -->
      </div>
    </Main>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  portfolio(id: $id) {
      id
      title
      content
      video
      tags
  }
}
</page-query>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Layout from '@/layouts/DefaultLayout.vue'
import Icons from '@/components/Icons.vue'
import Main from '@/components/Main.vue'
import Tag from '@/components/Tag.vue'
import CardLink from '@/components/CardLink.vue'
import PortfolioCover from '@/components/PortfolioCover.vue'
import Block from '@/components/Block.vue'

export default defineComponent({
  components: {
    Layout,
    Icons,
    Main,
    Tag,
    CardLink,
    PortfolioCover,
    Block,
  },
  metaInfo() {
    return {
      title: this.$page.portfolio?.title || '',
      titleTemplate: 'Portfolio / %s | Hendrik Bursian',
    }
  },
})
</script>

<style>
.prose p a {
  @apply no-underline inline-flex items-center;
}
.prose p a:after {
  content: '';
  width: 5px;
  height: 5px;
  margin-left: 3px;
  bottom: 3px;
  @apply relative rounded-full border-red-700 border;
}
.prose p a:hover {
  padding-top: 2px;
  padding-bottom: 2px;
  @apply bg-beige-300 rounded-md leading-none;
}
.prose p a:hover:after {
  @apply bg-red-700;
}
</style>
