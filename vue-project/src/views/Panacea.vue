<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "../store/contentStore";
const store = useUserStore();

let imageUrl = ["src/assets/images/page25chap1.jpg", "src/assets/images/page26chap1.jpg", "src/assets/images/page27chap1.jpg"];
let numberOfPages = ref(imageUrl.length);
const readingOption = ref("page");
let chapters = ["Chapter 1", "Chapter 2", "Chapter 3"];
let selectedChapter = ref(chapters[0]);
const currentPage = ref(0);


const previousPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < numberOfPages.value - 1) {
    currentPage.value++;
  }
};


const contents = computed(() => {
  return store.contents;
});

onMounted(() => {
  store.fetchContents();
});



// const options = {
//   method: 'GET',
//   url: 'https://webtoon.p.rapidapi.com/canvas/episodes/list',
//   params: { titleNo: '767708', startIndex: '0', language: 'en', pageSize: '20' },
//   headers: {
//     'X-RapidAPI-Key': 'e45b8f8e37msh7236953828362b2p1e804bjsnbb7266f0a629',
//     'X-RapidAPI-Host': 'webtoon.p.rapidapi.com'
//   }
// };

// axios.request(options)
//   .then(function (response) {
//     // console.log("response");
//     console.log(response.data.message.result.episodeList.episode);
//     // content = response.data.message.result.episodeList.episode;
//   })
//   .catch(function (error) {
//     console.error(error);
//   });


// const options1 = {
//   method: 'GET',
//   url: 'https://webtoon-phinf.pstatic.net/20220825_123/1661437225384bqI9o_PNG/83763ea8-f120-4ed9-ab2a-505cafeba9a6.png?type=q70',
//   headers: {
//     "Referer": "http://www.webtoon.com/"
//   }
// };

// const image = await axios.request(options1)

</script>

<template>


  <div class="dropdown" v-if="chapters.length > 0">
    <div class="field mr-2">
      <div class="control">
        <div class="select">
          <select v-model="readingOption">
            <option value="all">All in one page</option>
            <option value="page">Page by page</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <div class="select">
          <select v-model="selectedChapter">
            <option v-for="(content, index) in contents" :key="index" :value="content">{{ content.episodeTitle }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>


  <div class="columns is-centered is-mobile" v-if="readingOption === 'all'">
    <div class="column is-center is-half img-container">
      <img v-for="(image, index) in imageUrl" :src="image" :key="index" class="is-centered" />
      <!-- ICI CHANGER BOUCLE D'ACCES AUX IMAGES-->
    </div>
  </div>

  <div class="columns is-centered is-mobile" v-if="readingOption === 'page'">
    <div class="column is-center is-half img-container">
      <img :src="imageUrl[currentPage]" class="is-centered" /> <!-- ICI CHANGER BOUCLE D'ACCES AUX IMAGES-->
    </div>
  </div>



  <nav v-if="readingOption === 'page'" class="pagination is-centered" role="navigation" aria-label="pagination">

    <ul class="pagination-list">

      <li v-for="(item, index) in numberOfPages" :key="index">
        <a v-bind:class="{ 'pagination-link is-current mr-6 ml-6': index + 1 === currentPage + 1 }"
          @click="currentPage = index">
          {{ index + 1 }}
        </a>
      </li>
    </ul>

    <a class="pagination-previous" @click="previousPage">Previous</a>
    <a class="pagination-next" @click="nextPage">Next</a>
  </nav>


</template>

<style>
a.pagination-previous {
  margin-left: 50vh;

  font-weight: bold;

}

a.pagination-next {
  margin-right: 50vh;
}
</style>
