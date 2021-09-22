<template>
  <section class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
    <article
      v-for="people in section"
      :key="people.id"
      class="h-full border-2 border-gray-200 rounded-lg overflow-hidden"
    >
      <h2
        class="
          tracking-widest
          text-xs
          title-font
          font-medium
          text-gray-500
          mb-1
        "
      >
        birthday: {{ people.birth_year }}
      </h2>
      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
        {{ people.name }}
      </h1>
      <div class="flex items-center flex-wrap">
        <router-link
          :to="`/people/${people.id}`"
          class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          >Learn More
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    section: { type: Array, required: true },
  },
})
export default class Default extends Vue {}
</script>
