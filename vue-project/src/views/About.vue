<template>

  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Made By Getters</h1>
    <div v-for="user in getUsers" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
    <h1>Made By Actions</h1>
    <div v-for="user in users" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address.street }}
    </div>
  </div>
  <br>
  <br>
  <div v-for="content in contents" :key="content.episodeNo">
    {{ content.episodeTitle }} {{ content.thumbnailImageUrl }}
  </div>


</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "../store/contentStore";
const store = useUserStore();
const msg = ref("Welcome to my Vuex Store");
const getUsers = computed(() => {
  return store.getUsers;
});
const users = computed(() => {
  return store.users;
});

const contents = computed(() => {
  return store.contents;
});

onMounted(() => {
  store.fetchUsers();
  store.fetchContents();
});


// console.log(contents.value);
</script>

<style>
body {
  height: 100vh;
}
</style>
