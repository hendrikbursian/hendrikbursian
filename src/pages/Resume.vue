<!-- eslint-disable vue/no-v-html -->
<template>
  <Layout>
    <h1
      class="font-resume-sans text-3xl font-medium tracking-wider text-center uppercase whitespace-no-wrap"
    >
      {{ $page.me.name }}
    </h1>
    <div
      class="font-resume-sans text-xs font-normal leading-loose tracking-wider text-center uppercase"
    >
      <div class="whitespace-no-wrap">
        <a :href="$page.me.addressUrl" rel="noopener noreferrer">{{
          $page.me.address
        }}</a>
      </div>
      <div class="whitespace-no-wrap">
        <a class="mx-2" :href="phoneHref">{{ $page.me.phone }}</a>
        <a class="mx-2" :href="mailHref">{{ $page.me.email }}</a>
      </div>
    </div>

    <ResumeHeading>{{ $t('headings.education') }}</ResumeHeading>

    <div v-for="edge in $page.education.edges" :key="edge.node.id" class="mb-8">
      <div class="flex justify-between mt-2 mb-1/2">
        <h3 class="text-xl">
          {{ edge.node.institution }}
        </h3>
        <div class="ml-4 text-right whitespace-no-wrap">
          {{ formatDate(edge.node.dateStart, edge.node.dateEnd) }}
        </div>
      </div>
      <div class="flex justify-between mb-1">
        <div class="text-sm italic font-hairline">
          {{ edge.node.degree }}
        </div>
        <div class="text-sm italic font-hairline small-caps">
          {{ edge.node.place }}
        </div>
      </div>
    </div>

    <ResumeHeading>{{ $t('headings.experience') }}</ResumeHeading>

    <div
      v-for="edge in $page.experienceBusiness.edges"
      :key="edge.node.id"
      class="mb-8"
    >
      <div class="flex justify-between mt-2 mb-1/2">
        <h3 class="text-xl">
          {{ edge.node.company }}
        </h3>
        <div class="ml-4 text-right whitespace-no-wrap">
          {{ formatDate(edge.node.dateStart, edge.node.dateEnd) }}
        </div>
      </div>
      <div class="flex justify-between mb-1">
        <div class="text-sm italic font-hairline">
          {{ edge.node.jobTitle }}
        </div>
        <div class="text-sm italic font-hairline small-caps">
          {{ edge.node.workplace }}
        </div>
      </div>
      <div
        class="text-sm prose prose-resume font-resume-serif ml-1/2"
        v-html="edge.node.content"
      ></div>
    </div>

    <ResumeHeading>{{ $t('headings.skills') }}</ResumeHeading>

    <div>
      <template v-for="edge in $page.skills.edges">
        <template v-for="(skill, i) in edge.node.skills">
          <div :key="`${edge.node.id}:${i}`" class="mt-4">
            <a
              v-if="skill.link"
              target="_self"
              rel="noopener noreferrer"
              :href="skill.link"
              class="font-hairline"
              ><h3 v-html="skill.name"></h3
            ></a>
            <span
              v-if="!skill.link"
              class="font-hairline"
              v-html="skill.name"
            />
          </div>

          <ul
            v-for="(experience, j) in skill.experience"
            :key="`${edge.node.id}:${i}:${j}`"
            class="leading-relaxed ml-4"
          >
            <li class="text-sm" v-html="experience" />
          </ul>
        </template>
      </template>
    </div>
  </Layout>
</template>

<page-query>
  query($locale: String!) {
  	me(path: "/me") {
      name
      address
      addressUrl
      email
      phone
    },
    education: allEducation(
      filter: { lang: { eq: $locale } },
      sortBy: "dateStart" order: DESC
    ) {
      edges {
        node {
          id
          institution
          place
          dateStart
          dateEnd
          degree
        }
      }
    },
    experienceBusiness: allExperienceBusiness(
      filter: { lang: { eq: $locale } },
      sortBy: "dateStart" order: DESC
    ) {
      edges {
        node {
          id
          jobTitle
          workplace
          company
          dateStart
          dateEnd
          content
        }
      }
    },
    skills: allSkills(
      filter: { lang: { eq: $locale } }
    ) {
      edges {
        node {
          id
          skills {
            name
            link
            experience
          }
        }
      }
    }
  }
</page-query>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import Layout from '@/layouts/ResumeLayout.vue'
import ResumeHeading from '@/components/ResumeHeading.vue'

export default defineComponent({
  components: {
    Layout,
    ResumeHeading,
  },

  computed: {
    phoneHref() {
      const page = this.$page as { me: { phone: string } }
      const phone = page.me.phone.replace(/[ -]/g, '')

      return `tel:${phone}`
    },

    mailHref() {
      const page = this.$page as { me: { email: string } }
      const email = page.me.email

      return `mail:${email}`
    },
  },

  setup(props, context) {
    function formatDate(start: string, end: string) {
      const startDate = new Date(start)
      const endDate = new Date(end)

      if (startDate.getFullYear() !== endDate.getFullYear()) {
        return `${startDate.getFullYear()}–${endDate
          .getFullYear()
          .toString()
          .substring(2)}`
      }

      return `${startDate.getFullYear()}`
    }

    return { formatDate }
  },
})
</script>
