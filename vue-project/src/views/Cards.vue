<script setup lang="ts">
import { ref, computed } from 'vue';

const cards = ref([{ img: "src/assets/images/carte1.jpg", nom: "Exile" }, { img: "src/assets/images/carte2.jpg", nom: "Rat" }, { img: "src/assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "src/assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "src/assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "src/assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "/assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "/assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "/assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "../assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "../assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "../assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "../assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "../assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "../assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "../assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "../assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "../assets/images/carte3.jpg", nom: "Amias Eden" }, { img: "../assets/images/carte3.jpg", nom: "Amias Eden" }]);


let showModal = ref(false);
let imgModal = ref("");
const cardsPerPage = 4;

function togglePopup(img) {
  imgModal.value = img;
  showModal.value = !showModal.value;
}
let displayedCards = ref(cards.value.slice(0, cardsPerPage));
let show = ref(false);
function showMore() {

  displayedCards.value = displayedCards.value.concat(cards.value.slice(displayedCards.value.length, displayedCards.value.length + cardsPerPage));
};


</script>

<template>
  <body id="bodycards">


    <div class="container flex" style="height: 100%;">
      <h2 class="title mb-16 mb-24-tablet">Explore Eden's world</h2>
      <div class="columns is-multiline">


        <div v-for="(card, index) in displayedCards" :key="index" class="column is-3-desktop is-6-tablet">
          <div class="has-background-white pt-4 px-10 pb-10 is-relative"
            v-if="typeof card === 'object' && card.img && card.nom">
            <a @click="togglePopup(card.img)" class="mt-6 mb-2 px-6 is-block">

              <img class="mx-auto mb-5 image" style="height: 224px; object-fit: contain" :src="card.img" />
              <h5 class="title is-size-5 mb-2">{{ card.nom }} - Carte° {{ index + 1 }}</h5>
            </a>
            <a @click="togglePopup(card.img)" class="button is-outlined p-0 ml-auto is-flex"
              style="width: 48px; height: 48px">
              <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" width="2" height="12" fill="currentColor"></rect>
                <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div class="modal" :class="{ 'is-active': showModal }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <img :src="imgModal" alt="Image de la carte">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="togglePopup"></button>
      </div>


      <div class="has-text-centered">
        <a class="button is-primary" @click="showMore">Show More</a>
      </div>
    </div>

  </body>
</template>

<style scoped>
.bodycards {
  overflow: scroll;
  height: 100vh;
}

.title {
  color: #4a4a4a;
}

.button.is-primary {
  background-color: #007bff;
  color: #ffffff;
}

.button.is-outlined {
  background-color: #ffffff;
  border-color: #007bff;
}

.button:hover {
  opacity: 0.8;
}

.column.is-3-desktop {
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 30px;
}
</style>

