<script setup lang="ts">
import { ref, computed } from 'vue';

const cards = ref(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
// const cardsPerPage = 4;
// // let displayedCards = computed(() => (cards.slice(0, cardsPerPage.value)));
// let displayedCards = cards.value.slice(0, cardsPerPage);


// function showMore() {
//   displayedCards = displayedCards.concat(cards.value.slice(displayedCards.length, displayedCards.length + cardsPerPage));

//   console.log(displayedCards);
// };



const cardsPerPage = 4;
let displayedCards = ref(cards.value.slice(0, cardsPerPage));
let show = ref(false);
function showMore() {

  displayedCards.value = displayedCards.value.concat(cards.value.slice(displayedCards.value.length, displayedCards.value.length + cardsPerPage));
};


</script>

<template>

  <body>


    <div class="container flex" style="height: 100%;">
      <h2 class="title mb-16 mb-24-tablet">Explore Eden's world</h2>
      <div class="columns is-multiline">


        <div v-for="(card, index) in displayedCards" :key="index" class="column is-3-desktop is-6-tablet">
          <div class="has-background-white pt-4 px-10 pb-10 is-relative">
            <a class="mt-6 mb-2 px-6 is-block" href="#">
              <img class="mx-auto mb-5 image" style="height: 224px; object-fit: contain"
                src="../assets/images/bg_panacea.jpg" alt="" />
              <h5 class="title is-size-5 mb-2">Carte° {{ index+ 1 }}</h5>
            </a>
            <a class="button is-outlined p-0 ml-auto is-flex" style="width: 48px; height: 48px">
              <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" width="2" height="12" fill="currentColor"></rect>
                <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect>
              </svg>
            </a>
          </div>
        </div>

      </div>


      <div class="has-text-centered">
        <a class="button is-primary" @click="showMore">Show More</a>
      </div>
    </div>

  </body>
</template>

<style>

</style>
