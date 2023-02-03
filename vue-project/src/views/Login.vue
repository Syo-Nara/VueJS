<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { accountService } from "../services/accountService";

import { ref, computed } from "vue";
import { useStore } from "vuex";
import * as yup from "yup";

// let loading = ref(false);
// let message = "";

// let schema = yup.object().shape({
//   login: yup.string().required("Login is required!"),
//   password: yup.string().required("Password is required!"),
// });

// const store = useStore();
// let loggedIn = computed(() => {
//   return store.state.auth.status.loggedIn;
// });
// let created = computed(() => {
//   if (loggedIn) {
//     console.log("success");

//     // return $router.push("/home");
//   }
// });

let user = { login: "", password: "" };

function login() {
  accountService
    .login(user)
    .then((res) => {
      console.log(res);
      // $router.push("/home");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(user);
}

// function handleLogin(user) {
//   loading = true;
//   console.log(user);
//   console.log("dispatch go");

//   store.dispatch("auth/login", user).then(
//     () => {
//       console.log("success");

//       //   $router.push("/home");
//     },
//     (error) => {
//       loading = false;
//       message =
//         (error.response && error.response.data & error.response.data.message) ||
//         error.message ||
//         error.toString();
//     }
//   );
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

  <br />
  <br />

  <div>
    <Form @submit="handleLogin" :validation-schema="schema">
      <div class="form-group">
        <label for="username">Username</label>
        <Field name="username" type="text" class="form-control" />
        <ErrorMessage name="username" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <Field name="password" type="password" class="form-control" />
        <ErrorMessage name="password" class="error-feedback" />
      </div>

      <div class="form-group">
        <button class="btn btn-primary btn-block" :disabled="loading">
          <span
            v-show="loading"
            class="spinner-border spinner-border-sm"
          ></span>
          <span>Login</span>
        </button>
      </div>

      <div class="form-group">
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </Form>
  </div>
</template>

<style></style>
