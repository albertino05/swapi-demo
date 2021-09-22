<template>
  <div class="h-10 flex justify-center">
    <div class="w-24" v-if="pagination.previous">
      <a @click="$emit('onPagination', pagination.previous)">prev</a>
    </div>
    <div class="w-24" v-if="pagination.next">
      <a @click="$emit('onPagination', pagination.next)">next</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    pagination: { type: Object, required: true },
  },
})
export default class Pagination extends Vue {}
</script>
