<script setup>

import { ref } from 'vue';
let imageUrl = ["src/assets/images/page25chap1.jpg", "src/assets/images/page26chap1.jpg", "src/assets/images/page27chap1.jpg"];

let readingOption = ref("page");
let chapters = ["Chapter 1", "Chapter 2", "Chapter 3"];
let selectedChapter = chapters[0];

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
            <option v-for="(chapter, index) in chapters" :key="index" :value="chapter">{{ chapter }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>


  <div class="columns is-centered is-mobile" v-if="readingOption === 'all'">
    <div class="column is-center is-half img-container">
      <img  v-for="(image, index) in imageUrl" :src="image" :key="index" class="is-centered"/>  <!-- ICI CHANGER BOUCLE D'ACCES AUX IMAGES-->
    </div>
  </div>

  <div class="columns is-centered is-mobile" v-if="readingOption === 'page'">
    <div class="column is-center is-half img-container">
      <img  :src="imageUrl[2]"  class="is-centered"/>  <!-- ICI CHANGER BOUCLE D'ACCES AUX IMAGES-->
    </div>
  </div>

  <nav v-if="readingOption === 'page'" class="pagination is-centered" role="navigation" aria-label="pagination">
    <a class="pagination-previous">Previous</a>
    <a class="pagination-next">Next</a>
    <ul class="pagination-list">
      <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
      <li>
        <a
          class="pagination-link is-current"
          aria-label="Page 46"
          aria-current="page"
          >46</a
        >
      </li>
      <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
    </ul>
  </nav>

</template>

<style>
.pagination,
.pagination-list {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
}

.pagination {
  font-size: 1rem;
  margin: -0.25rem;
}
</style>
