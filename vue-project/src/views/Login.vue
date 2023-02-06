<script setup>
import { accountService } from "../services/accountService";
import { ref, onMounted, computed } from "vue";

import router from "../router";
import userStore from "@/store/userStore";

var user = { login: "", password: "" };

// const setUser = computed((value) => {
//   store.setUser(value);
// });
// const u = computed((value) => {
//   return store.getUser();
// });

function login() {
  accountService
    .login(user)
    .then((res) => {
      console.log(res.data);
      sessionStorage.setItem("user", res.data);

      console.log(sessionStorage.getItem("user").data);

      // store.user = true;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(localStorage.getItem("user").data);
}

// function onSubmit(credentials) {
//   const store = userStore();
//   console.log(credentials);
//   store.login(credentials);
// }
</script>

<template>
  <br />
  <div class="container box p-6 has-background-light is-max-desktop">
    <h1 class="title has-text-centered has-text-success">Enter Eden Island</h1>
    <h2 class="subtitle has-text-centered">Log in Form</h2>

    <form @submit.prevent="login">
      <div class="field- is-medium">
        <label class="label">Login</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Enter your login"
            v-model="user.login"
          />
        </div>
      </div>

      <div class="field is-medium">
        <label class="label">Password</label>
        <div class="control">
          <input
            class="input"
            type="password"
            placeholder="Enter your password"
            v-model="user.password"
          />
        </div>
      </div>

      <br />

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-success">Log in</button>
        </div>
        <div class="control">
          <button class="button is-fail">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style></style>
