<script setup>
import { ref } from 'vue';


import userStore from '../store/userStore';
let user = ref({
  pseudo: "",
  email: "",
  password: "",
  login: "",
});

const userStorea = new userStore();

const signup = async () => {
  console.log(user.value);
  await userStorea.register(user.value);
}
</script>

<template>
  <div class="container box p-6 has-background-light is-max-desktop" id="registercontainer">
    <h1 class="title has-text-centered" id="title">
      **Join Eden's Island**
    </h1>
    <h2 class="subtitle has-text-centered" id="subtitle">**JOIN**</h2>

    <form @submit.prevent="signup">
      <div class="field is-medium">
        <label class="label">Pseudo</label>
        <div class="control">
          <input class="input" type="text" placeholder="Choose your pseudo" v-model="user.pseudo" />
        </div>
      </div>

      <div class="field is-medium">
        <label class="label">Mail</label>
        <div class="control">
          <input class="input" type="email" placeholder="Enter your mail" v-model="user.email" />
        </div>
      </div>

      <div class="field is-medium">
        <label class="label">Login</label>
        <div class="control">
          <input class="input" type="text" placeholder="Enter your login" v-model="user.login" />
        </div>
      </div>

      <div class="field is-medium">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="Enter your password" v-model="user.password" />
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

<style>
.field {
  margin-bottom: 1rem;
  color: white;
}

#title {
  color: white;
}

#subtitle {
  color: white;
}


.label.label {
  color: white;
}

#registercontainer {
  background-image: url(../assets/steampunk/wallhaven-43q65d.jpg);
}
</style>
