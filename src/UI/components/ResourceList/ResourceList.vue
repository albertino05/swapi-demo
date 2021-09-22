<template>
  <div>
    <h2 class="text-4xl font-semibold text-black text-center">
      {{ type.toUpperCase() }}
    </h2>
    <Component :is="sectionItem" :section="section" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    section: { type: Array, required: true },
    type: { type: String, required: true },
  },
  computed: {},
  data() {
    const type = this.$props.type;
    const template = `${type.charAt(0).toUpperCase()}${type.slice(1)}`;

    return {
      sectionItem: async () => await import(`./sections/${template}`),
    };
  },
})
export default class ResourceList extends Vue {}
</script>
