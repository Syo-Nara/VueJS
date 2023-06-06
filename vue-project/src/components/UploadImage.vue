<template>
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-half" :style="{ minWidth: '300px' }">
                <div class="box">
                    <form @submit.prevent="submitForm">
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label" for="chapterName">Chapitre :</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" id="chapterName" v-model="chapter.name"
                                            placeholder="Nom" required />
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="number" id="chapterNumber" v-model="chapter.number"
                                            placeholder="Numéro" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input class="input" type="file" id="images" @change="onFileChange" multiple />
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary" type="submit">Envoyer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";

const chapter = ref({
    name: "",
    number: "",
    images: []
});

const onFileChange = (event) => {
    const files = event.target.files;
    chapter.value.images = [];
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
            chapter.value.images.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
    }
};

const submitForm = () => {
    // Vous pouvez traiter ou envoyer l'objet 'chapter' au backend ici
    console.log("Données du formulaire:", chapter.value);
};
</script>
  