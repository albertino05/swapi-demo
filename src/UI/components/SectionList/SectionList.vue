<template>
  <div class="flex flex-wrap mt-12 justify-center">
    <div class="h-10 flex justify-center">
      <div v-for="(type, index) in listSections" :key="index">
        <h3 class="font-semibold text-black w-24">
          <router-link :to="`/${type}`" class="w-24">{{ type }}</router-link>
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    sections: { type: Object, required: true },
  },
  computed: {
    listSections() {
      const sections = this.$props.sections;

      const wip = ["films", "species", "vehicles"];
      return Object.keys(sections).filter((section) => !wip.includes(section));
    },
  },
})
export default class SectionList extends Vue {}
</script>
