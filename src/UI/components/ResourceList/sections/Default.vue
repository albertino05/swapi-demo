<template>
  <div>
    <pre>{{ section }}</pre>
  </div>
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
