<template>
  <div>
    <Component :is="sectionItem" :item="item" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    item: { type: Object, required: true },
    type: { type: String, required: true },
  },
  data() {
    const type = this.$props.type;
    const template = `${type.charAt(0).toUpperCase()}${type.slice(1)}`;

    return {
      sectionItem: async () => await import(`./sections/${template}`),
    };
  },
})
export default class ResourceView extends Vue {}
</script>
