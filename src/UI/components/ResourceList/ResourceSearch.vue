<template>
  <div class="h-10 flex justify-center">
    <div class="w-24">
      SEARCH
      <input v-model="search" placeholder="text" @keyup="onChange" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// eslint-disable-next-line
const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  // eslint-disable-next-line
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

@Component({
  props: {
    debounce: { type: Number, default: 750 },
  },
  data() {
    return {
      search: undefined,
    };
  },
  methods: {},
  created() {
    // @ts-expect-error: ignore prop onChange not in Vue
    this.onChange = debounce(() => {
      this.$emit("onSearch", this.$data.search);
    }, this.$data.debounce);
  },
})
export default class ResourceSearch extends Vue {}
</script>
