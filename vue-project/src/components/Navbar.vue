<script setup>
import { RouterLink } from "vue-router";

import userStore from "../store/userStore";

const store = userStore();

console.log("logged =", store.loggedIn);


</script>

<!-- <template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item">
        <RouterLink to="/"> LUSKIDDO </RouterLink>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <RouterLink to="/">Home</RouterLink>
        </a>

        <a class="navbar-item">
          <RouterLink to="/panacea">Panacea</RouterLink>
        </a>

        <a class="navbar-item">
          <RouterLink to="/card">Cards</RouterLink>
        </a>

        <a class="navbar-item">
          <RouterLink to="/q&a">Q&A</RouterLink>
        </a>

        <a class="navbar-item">
          <RouterLink to="/about">About</RouterLink>
        </a>

        <a class="navbar-item" v-if="store.admin == true">
          <RouterLink to="/Admin">Admin</RouterLink>
        </a>
      </div>

      <div class="navbar-end">
        <div v-if="store.loggedIn == false" class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <RouterLink to="/signup">
                <strong style="color: white"> Sign up </strong>
              </RouterLink>
            </a>
            <a class="button is-light">
              <RouterLink to="/login" style="color: black">Log in</RouterLink>
            </a>
          </div>
        </div>

        <div v-if="store.loggedIn == true" class="navbar-item">

          <div class="navbar-item">
            <a>
              <i class="fa-solid fa-user"></i>
            </a>
            &nbsp;&nbsp;
            <p> {{ store.user.pseudo }}</p>
          </div>
          <div class="buttons">
            <a v-on:click="store.logout()" class="button is-dark"> Log out </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template> -->


<template>
  <nav class="navbar" id="navbar">
    <div class="navbar-brand">
      <RouterLink to="/">
        <a class="navbar-item" id="navbar-item">
          <span class="is-size-4 has-text-white">LUSKIDDO</span>
        </a>
      </RouterLink>

    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item has-text-primary" id="navbar-item">
          <RouterLink to="/">
            <span>Home</span>
          </RouterLink>
        </a>

        <a class="navbar-item has-text-primary">
          <RouterLink to="/panacea">
            <span>Panacea</span>
          </RouterLink>
        </a>

        <a class="navbar-item has-text-primary">
          <RouterLink to="/card">
            <span>Explore</span>
          </RouterLink>
        </a>

        <a class="navbar-item has-text-primary">
          <RouterLink to="/q&a">
            <span>Q&A</span>
          </RouterLink>
        </a>

        <a class="navbar-item has-text-primary">
          <RouterLink to="/aboutme">
            <span>About</span>
          </RouterLink>
        </a>

        <a class="navbar-item has-text-primary" v-if="store.admin == true">
          <RouterLink to="/Admin">
            <span>Admin</span>
          </RouterLink>
        </a>
      </div>

      <div class="navbar-end">
        <div v-if="store.loggedIn == false" class="navbar-item">
          <div class="buttons">
            <RouterLink to="/signup">
              <a class="button">
                <strong>Sign up</strong>
              </a>
            </RouterLink>
            <RouterLink to="/login">
              <a class="button">
                <strong>Log in</strong>
              </a>
            </RouterLink>
          </div>
        </div>

        <div v-if="store.loggedIn == true" class="navbar-item">

          <div class="navbar-item">
            <a>
              <i class="fa-solid fa-user"></i>
            </a>
            &nbsp;&nbsp;
            <p style="font-weight: bold;size: 10em;"> {{ store.user.pseudo }}</p>
          </div>
          <div class="buttons">
            <a v-on:click="store.logout()" class="button is-dark"> Log out </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style >
#navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #38C18D;
  /* couleur primaire */
  padding: 0.5rem 0.5rem;
}

.navbar-item.has-text-primary {
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: #38C18D;
  /* couleur primaire */
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}

.navbar-item.has-text-primary:hover {
  transform: scale(1.2);
  background-color: #E3FA48;
  /* couleur primaire 2 */
}

.navbar-item.has-text-primaactive {
  color: #500f0f;
  background-color: #BD5E7D;
  /* couleur primaire 2 */
  border-radius: 20px;
  padding: 0.25rem 0.5rem;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  background-color: #0c0a0c;
  /* couleur secondaire 2 */
  color: #911414;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.button:hover {
  background-color: #E297AF;
  /* couleur primaire 1 */
  color: #672770;
  /* couleur secondaire 2 */
  transform: scale(1.1);
}

.fa-solid {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

.navbar-dropdown {
  margin-left: 1rem;
  margin-right: 1rem;
}

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }

  .navbar-menu.is-active {
    display: block;
    background-color: #070606;
    /* couleur primaire 2 */
    position: absolute;
    top: 60px;
  }
}
</style>
