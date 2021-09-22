<template>
  <ResourceView
    :item="$storage.getters.getResource()"
    :type="$route.params.section"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ResourceView } from "@/UI/components";

@Component({
  components: {
    ResourceView,
  },
  mounted(): void {
    const { section, id } = this.$route.params;

    this.$storage.actions.fetchResource({ type: section, id: Number(id) });
  },
})
export default class Resource extends Vue {}
</script>
