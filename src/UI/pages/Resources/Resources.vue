<template>
  <div>
    <ResourceList
      :section="$storage.getters.getResources()"
      :type="$route.params.section"
    />
    <Pagination
      :pagination="$storage.getters.getPagination()"
      @onPagination="loadResources"
    />

    <router-link to="/">Back Home</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ResourceList, Pagination } from "@/UI/components";

@Component({
  components: {
    ResourceList,
    Pagination,
  },
  mounted(): void {
    this.$storage.actions.fetchResources({ type: this.$route.params.section });
  },
  methods: {
    loadResources(page?: number) {
      this.$storage.actions.fetchResources({
        type: this.$route.params.section,
        page,
      });
    },
  },
})
export default class Resources extends Vue {}
</script>
