import { ApiProvider } from "@/service";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    services?: ApiProvider;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $services: ApiProvider;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $services: ApiProvider;
  }
}
