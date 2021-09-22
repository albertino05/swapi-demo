import { ApiStorage } from "@/store";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    storage?: ApiStorage;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $storage: ApiStorage;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $storage: ApiStorage;
  }
}
