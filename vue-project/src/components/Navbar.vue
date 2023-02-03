<script>
import { RouterLink } from "vue-router";
export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="navbar is-mobile">
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
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              <RouterLink to="/login">Log in</RouterLink>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- <nav class="level">
    <p class="level-item has-text-centered">
      <a class="link is-info"> <RouterLink to="/">Home</RouterLink> </a>
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info">
        <RouterLink to="/aboutme">Panacea</RouterLink>
      </a>
    </p>
    <p class="level-item has-text-centered">
      <RouterLink to="/">Luskiddo</RouterLink>
    </p>
    <p class="level-item has-text-centered">
      <RouterLink to="/card">Cards</RouterLink>
    </p>
    <p class="level-item has-text-centered">
      <RouterLink to="/q&a">Q&A</RouterLink>
    </p>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            <RouterLink to="/login">Log in</RouterLink>
          </a>
        </div>
      </div>
    </div>
  </nav> -->
</template>

<style>
.navbar {
  display: flex;
  align-content: center;
  justify-content: center;
}

.navbar-item {
  margin-left: 1rem;
  margin-right: 1rem;
}

.navbar-dropdown {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
