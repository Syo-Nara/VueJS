<template>
    <div>

        <p>Admin Page</p>
        <draggable :on-vnode-updated="consolog()" v-model="images" :options="options" class="list-group">
            <template #item="{ element }">
                <div class="list-group-item">
                    <img :src="element.url" class="image_thumbnail" />
                </div>
            </template>
        </draggable>

        <input type="file" @change="handleFileUpload" multiple />
        <br>
        <br>

        <p> {{ images.value }}</p>

        <UploadImage></UploadImage>
    </div>
</template>
  
<script setup>
import { ref, watch } from "vue";
import draggable from "vuedraggable";
import UploadImage from "../components/UploadImage.vue";

const images = ref([]);

const handleFileUpload = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (event) => {
            const url = event.target.result;
            images.value.push({ file, url });
        };
        reader.readAsDataURL(file);
    }

};


function consolog() {
    images.value.forEach((image) => {
        console.log("file", image.file.name);
    });
}



const handleDragUpdate = (event) => {
    images.value = event;
};

const sortedImages = ref([]);

const options = {
    animation: 150,
    handle: ".drag-handle",
    draggable: ".list-group-item",
};

watch(images, (newValue) => {
    sortedImages.value = [...newValue];
});
</script>
  
<style scoped>
.sortable {
    display: flex;
    flex-wrap: wrap;
}

.sortable>div {
    flex-basis: 25%;
    margin: 10px;
}

.image_thumbnail {
    width: 100px;
    height: 100 px;
}
</style>
  