<template>
    <div class="image-sortable">
        <div class="upload">
            <label for="image-upload">Upload d'images :</label>
            <input type="file" id="image-upload" @change="onFileChange" multiple accept="image/*" />
        </div>
        <div class="image-list">
            <draggable v-model="images" @end="updateImageOrder">
                <template #item="{ item, index }">
                    <div class="image-item" :key="item.id">
                        <img :src="item.src" :alt="item.name" />
                        <p>{{ item.name }}</p>
                        <p>#{{ index + 1 }}</p>
                    </div>
                </template>
            </draggable>
        </div>
        <div class="image-details">
            <h2>Image sélectionnée :</h2>
            <div v-if="selectedImage">
                <img :src="selectedImage.src" :alt="selectedImage.name" />
                <p>{{ selectedImage.name }}</p>
                <p>#{{ selectedImage.index + 1 }}</p>
            </div>
            <p v-else>Aucune image sélectionnée</p>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const images = ref([]);

const selectedImage = ref(null);

function updateImageOrder(event) {
    const newIndex = event.newIndex;
    const image = images.value[newIndex];
    selectedImage.value = { ...image, index: newIndex };
}

async function onFileChange(event) {
    const files = event.target.files;
    for (const file of files) {
        const reader = new FileReader();
        reader.onload = () => {
            const image = {
                id: Date.now(),
                src: reader.result,
                name: file.name,
            };
            images.value.push(image);
        };
        reader.readAsDataURL(file);
    }
}
</script>
  
<style scoped>
.image-sortable {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.upload {
    margin-bottom: 1rem;
}

.image-list {
    display: flex;
    flex-direction: column;
    gap: 0.5
}
</style >