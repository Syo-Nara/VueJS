<template>
  <div class="container is-fluid">
    <div class="container is-fluid">
      <div class="carousel-container">
        <div class="carousel-wrapper">
          <!-- Fond avec les œuvres de l'artiste -->
          <Carousel :autoplay="1000" :wrap-around="true">
            <Slide v-for="(work, index) in artist.works" :key="index">
              <img :src="work.image" alt="Travail de l'artiste" class="background-image">
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
    <div class="columns glassmorphism">
      <!-- Colonne pour l'image de l'artiste -->
      <div class="column">
        <figure class="image is-square">
          <img :src="artist.image" alt="Photo de l'artiste">
        </figure>
      </div>


      <!-- Colonne pour le texte descriptif -->
      <div class="column">
        <h1 class="title">{{ artist.name }}</h1>
        <p class="subtitle">{{ artist.description }}</p>
      </div>
    </div>



  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

let artist = {
  name: 'Luskiddo',
  image: 'src/assets/images/lucy.png',
  description: "hi! my name's luskiddo, and yea, i like making comings, writing stories and stuff! I've been doing it for a long time but Panacea is the first real project im like legit making happen and it's really exciting for me :) i'm an animation major and i somewhat know about art but i've never academically learned how to make comics so this project is my way to learn and experiment! I'm having a lot of fun with it and it makes me so happy you're coming along for the ride! (also, small thing: i have a little weird request maybe only if you feel like it: basically, if you see any typos or sentences that sound weird or anything, please share: D english is not my first language so ya know, it happens(a lot).)        OH! and you can ask me any question! i'd be happy to answer!",
  works: [
    { image: 'src/assets/images/page25chap1.jpg' },
    { image: 'src/assets/images/page26chap1.jpg' },
    { image: 'src/assets/images/page27hap1.jpg' },
    // Ajoutez plus d'œuvres ici...
  ]
};
</script>

<style scoped>
.background {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fade infinite;
}

@keyframes fade {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

/* Ajoutez ces styles à votre balise <style scoped> */


.carousel-container {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.carousel-wrapper {
  max-height: 800vh;
  /* Limite la hauteur du carousel à 90% de la hauteur de la fenêtre */
  /* Active le défilement vertical si le contenu dépasse la hauteur maximale */
}

.artist-presentation {
  position: relative;
  z-index: 1;
  /* Couleur de fond blanc avec 80% d'opacité */
  padding: 1rem;

}

.glassmorphism {
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
}
</style>
