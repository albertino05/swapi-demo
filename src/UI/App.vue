<template>
  <div id="app">
    <div v-if="$storage.getters.getLoading()" class="overlay"></div>
    <div class="container mx-auto h-18">
      <h1>SW Api Demo App</h1>
      <div class="h-10 flex justify-center">
        <div class="w-24"><router-link to="/">Home</router-link></div>
        <div class="w-24">
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(51, 51, 51, 0.7);
  z-index: 10;
}
</style>
