<script>
import { RouterLink } from "vue-router";
</script>
<template>
  <Navbar />
  <section class="hero is-fullheight is-bold">
    <div class="hero head">
      <div
        class="welcome-message has-text-centered has-text-weight-bold"
        id="title"
      >
        Welcome to Luskiddo's Panacea !
      </div>
    </div>
    <div class="hero-body">
      <div class="flex container">
        <div class="welcome-container">
          <div class="welcome-message has-text-justified">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            itaque nesciunt? Esse accusamus reprehenderit ut, dolor consequatur
            nisi repudiandae est fuga eveniet sed neque beatae dolore ea.
            Obcaecati, cumque illum?
          </div>

          <br />
          <br />
          <n-space style="z-index: 1">
            <router-link to="/panacea">
              <a class="button is-primary">
                <strong>Last Chapter</strong>
              </a>
            </router-link>

            <router-link to="/q&a">
              <a class="button is-light">
                <strong>Ask me anything!</strong>
              </a>
            </router-link>

            <a href="https://www.patreon.com/luskiddo">
              <a class="button is-dark">
                <i class="fa-brands fa-patreon"></i> &nbsp; Support me on
                Patreon !</a
              >
            </a>
          </n-space>
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <div class="container is-centered">
        <div class="container">
          <div class="container">
            <p>herofoot</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.background-image {
  z-index: 0;
}

#title {
  color: white;
}

.hero {
  background-image: url(src/assets/images/bg_panacea.jpg);
  background-size: cover;
  background-position: initial;
  background-repeat: space;
}

.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-size: cover;
}

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
}

.welcome-message {
  font-size: 36px;
  color: rgb(20, 8, 8);
  margin-top: 50px;
  z-index: 1;
  color: white;
}

.buttons-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.patreon-icon {
  font-size: 36px;
  color: white;
}
</style>
