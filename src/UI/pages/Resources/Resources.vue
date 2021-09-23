<template>
  <div>
    <h2 class="text-4xl font-semibold text-black text-center">
      {{ $route.params.section.toUpperCase() }}
    </h2>
    <ResourceSearch @onSearch="searchResources" />
    <ResourceList
      :section="$storage.getters.getResources()"
      :type="$route.params.section"
    />
    <Pagination
      :pagination="$storage.getters.getPagination()"
      @onPagination="paginateResources"
    />

    <router-link to="/">Back Home</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ResourceList, Pagination, ResourceSearch } from "@/UI/components";

@Component({
  components: {
    ResourceList,
    Pagination,
    ResourceSearch,
  },
  mounted(): void {
    this.$storage.actions.fetchResources({ type: this.$route.params.section });
  },
  data() {
    return {
      currentSearch: "",
    };
  },
  methods: {
    paginateResources(page: number) {
      this.$storage.actions.fetchResources({
        type: this.$route.params.section,
        page: page,
        search: this.$data.currentSearch,
      });
    },
    searchResources(search: string) {
      this.$data.currentSearch = search;

      this.$storage.actions.fetchResources({
        type: this.$route.params.section,
        search: search,
      });
    },
  },
})
export default class Resources extends Vue {}
</script>
