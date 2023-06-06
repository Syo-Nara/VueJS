<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="hero is-fullheight is-bold">

    <div class="hero-body">
      <div class="welcome-message has-text-centered has-text-weight-bold" id="title" style="color:white">
        Welcome to Luskiddo's Panacea !
      </div>
      <br>
      <div class="flex container">
        <div class="welcome-container">
          <div class="welcome-message has-text-justified">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            itaque nesciunt? Esse accusamus reprehenderit ut, dolor
            consequatur nisi repudiandae est fuga eveniet sed neque beatae
            dolore ea. Obcaecati, cumque illum?
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
              <a class="button is-dark" id="thick1">
                <i class="fa-brands fa-patreon"></i> &nbsp; Support me on
                Patreon !</a> <!--MAKE ANIMATION UNDERLINE -->
            </a>
          </n-space>
        </div>
      </div>
    </div>


  </section>
</template>

<style scoped>
.background-image {
  z-index: 0;
}

#title {
  color: rgb(240, 240, 240);
}

#thick {
  background:
    linear-gradient(#000 0 0) left /100% var(--d, 0%) no-repeat;
  transition: 0.5s;
}

#thick:hover {
  --d: 100%;
  color: #fff;
}


#thick1 {
  --b: 4px;
  /* border length*/
  --c: 20px;
  /* the cube perspective */

  --g: calc(var(--c)*0.707);
  /* 0.707 = cos(45deg) = sin(45deg) */

  color: rgb(197, 104, 16);
  transition: 0.5s;
  border: solid transparent;
  border-width: var(--b) calc(var(--c) + var(--b)) calc(var(--c) + var(--b)) var(--b);
  background:
    linear-gradient(45deg, transparent var(--g), rgba(255, 255, 255, 0.6) 0) right /var(--c) 100%,
    linear-gradient(-135deg, transparent var(--g), rgba(255, 255, 255, 0.3) 0) bottom /100% var(--c),
    conic-gradient(from -180deg at top var(--b) left var(--b), currentColor 270deg, transparent 0),
    conic-gradient(from 0deg at bottom calc(var(--c) + var(--b)) right calc(var(--c) + var(--b)), currentColor 270deg, transparent 0);
  background-repeat: no-repeat;
  background-origin: border-box;
  transform: translate(calc(var(--c)/1), calc(var(--c)/1));
  clip-path:
    polygon(calc(100% - var(--c)) 0%, calc(100% - var(--c)) 0%,
      0% 0%,
      0% calc(100% - var(--c)), 0% calc(100% - var(--c)),
      calc(100% - var(--c)) calc(100% - var(--c)),
      calc(100% - var(--c)) calc(100% - var(--c)));
}

#thick1:hover {
  transform: translate(0, 0);
  clip-path:
    polygon(100% var(--c), calc(100% - var(--c)) 0%,
      0% 0%,
      0% calc(100% - var(--c)), var(--c) 100%,
      100% 100%,
      100% 100%);
}

body {
  height: 100vh;
}

.hero-body {
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
