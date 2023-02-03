<script setup>
let imageUrl = "src/assets/images/page25chap1.jpg";
</script>

<template>
  <div class="columns is-centered is-mobile is-centered">
    <div class="column is-centered is-half">
      <p class="bd-notification is-primary">
        <code class="html">is-half</code><br />
      </p>
    </div>
  </div>

  <section class="section">
    <div class="container box p-1 is-centered">
      <div class="columns is-centered">
        <div class="column is centered is-half" style="color: black">
          <p class="is-right">Centered</p>
        </div>
      </div>
    </div>
  </section>

  <div class="column is-centered is-half">
    <img :src="imageUrl" />
  </div>

  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
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

  <div></div>
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
