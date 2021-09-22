<template>
  <div>
    <SectionList :sections="$storage.getters.getSections()" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SectionList } from "@/UI/components";

@Component({
  components: {
    SectionList,
  },
  mounted() {
    this.$storage.actions.fetchSections();
  },
})
export default class Sections extends Vue {}
</script>
