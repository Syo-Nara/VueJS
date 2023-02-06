<script setup>
import { accountService } from "../services/accountService";

let user = {
  pseudo: "",
  mail: "",
  password: "",
  login: "",
};

function signup() {
  accountService
    .signup(user)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(user);
}
</script>

<template>
  <div class="container box p-6 has-background-light is-max-desktop">
    <h1 class="title has-text-centered has-text-success">
      **Join Eden's Island**
    </h1>
    <h2 class="subtitle has-text-centered">**JOIN**</h2>

    <form @submit.prevent="signup">
      <div class="field- is-medium">
        <label class="label">Pseudo</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Choose your pseudo"
            v-model="user.pseudo"
          />
        </div>
      </div>

      <div class="field- is-medium">
        <label class="label">Mail</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="Enter your mail"
            v-model="user.mail"
          />
        </div>
      </div>

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
          <button class="button is-success">Register</button>
        </div>
        <div class="control">
          <button class="button is-fail">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style></style>
