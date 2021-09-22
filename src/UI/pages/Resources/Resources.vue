<template>
  <div>
    <ResourceList
      :section="$storage.getters.getResources()"
      :type="$route.params.section"
    />
    <router-link to="/">Home</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ResourceList } from "@/UI/components";

@Component({
  components: {
    ResourceList,
  },
  mounted(): void {
    this.$storage.actions.fetchResources({ type: this.$route.params.section });
  },
})
export default class Resources extends Vue {}
</script>
