<template>
  <div id="app">
    <Navbar></Navbar>
    <RouterView />

    <Footer></Footer>



  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/footer.vue";
</script>
<style scoped>
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}
</style>
