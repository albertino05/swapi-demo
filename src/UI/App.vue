<template>
  <div id="app">
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
