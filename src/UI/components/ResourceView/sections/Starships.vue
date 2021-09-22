<template>
  <div>
    <article class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
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
        passengers: {{ item.passengers }}
      </h2>
      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
        {{ item.name }}
      </h1>
      <p class="leading-relaxed mb-3">
        cargo_capacity: {{ item.cargo_capacity }}<br />
        consumables: {{ item.consumables }} <br />
        crew: {{ item.crew }}<br />
        manufacturer: {{ item.manufacturer }}<br />
        max_atmosphering_speed: {{ item.max_atmosphering_speed }}
      </p>
    </article>
    <a
      @click="$router.back()"
      class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
    >
      Back
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    item: { type: Object, required: true },
  },
})
export default class Default extends Vue {}
</script>
