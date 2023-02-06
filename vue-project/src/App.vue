<template>
  <div id="app">
    <Navbar />
    <RouterView />

    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/footer.vue";
</script>

<style scoped>
html,
body {
  height: 100vh;
}
</style>
