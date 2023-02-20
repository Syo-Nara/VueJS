<script setup>
import { ref, onMounted, computed } from "vue";
import userStore from "@/store/userStore";

const user = ref({ login: "", password: "" });


const userStorea = new userStore();
const login = async () => {
  console.log(user.value);
  await userStorea.login(user.value.login, user.value.password);
}


</script>

<template>
  <body id="bg">

    <br />
    <div class="box has-background-light" id="boxlogin">
      <h1 class="title has-text-centered has-text-success">Enter Eden Island</h1>
      <h2 class="subtitle has-text-centered">Log in Form</h2>

      <form @submit.prevent="login">
        <div class="field- is-medium">
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
            <button class="button is-success">Log in</button>
          </div>
          <div class="control">
            <button class="button is-fail">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </body>
</template>

<style>
#bg {
  background-image: url("../assets/steampunk/wallhaven-4y2ov7.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#boxlogin {
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body {
  height: 100vh;
  margin: 0;
}
</style>
