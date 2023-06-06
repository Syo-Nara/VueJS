<template>
    <div class="main">
        <div class="dropzone-container" @dragover="dragover" @dragleave="dragleave" @drop="drop">
            <input type="file" multiple name="file" id="fileInput" class="hidden-input" @change="onChange" ref="file"
                accept=".pdf,.jpg,.jpeg,.png" />

            <label for="fileInput" class="file-label">
                <div v-if="isDragging">Release to drop files here.</div>
                <div v-else>Drop files here or <u>click here</u> to upload.</div>
            </label>
        </div>
        <br>
        <p> {{ files }}</p>
    </div>
</template>
  
<script setup>
import { ref } from "vue";

const isDragging = ref(false);
const files = ref([]);

const onChange = () => {
    files.value.push.refs.file.files;
};

const dragover = (e) => {
    e.preventDefault();
    isDragging.value = true;
};

const dragleave = () => {
    isDragging.value = false;
};

const drop = (e) => {
    e.preventDefault();
    refs.file.files = e.dataTransfer.files;
    onChange();
    isDragging.value = false;
};

</script>

<style scoped>
.main {
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 100vh;
    justify-content: center;
    text-align: center;
}

.dropzone-container {
    padding: 4rem;
    background: #f7fafc;
    border: 1px solid #e2e8f0;
}

.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

.file-label {
    font-size: 20px;
    display: block;
    cursor: pointer;
}

.preview-container {
    display: flex;
    margin-top: 2rem;
}

.preview-card {
    display: flex;
    border: 1px solid #a2a2a2;
    padding: 5px;
    margin-left: 5px;
}

.preview-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #a2a2a2;
    background-color: #a2a2a2;
}
</style>
  