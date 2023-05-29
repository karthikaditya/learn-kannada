<script setup>
import LetterFormsDisplay from './LetterForms/LetterFormsDisplay.vue';
import LetterSelector from './LetterForms/LetterSelector.vue'

import axios from 'axios';

</script>

<script>
export default {
    props: {},
    data() {
        return {
            samyuktaksharaLetters: [],
            publicPath: import.meta.env.BASE_URL,
            letters: [
                ""
            ],
            selectedLetter: Object,
            samyuktaksharaChildren: []
        }
    },
    mounted() {
        this.fetchData('./assets/json/samyuktakshara/letters.json');
    },
    methods: {
        fetchData(jsonPath) {
            axios.get(`${this.publicPath}${jsonPath}`)
                .then(response => {
                    this.samyuktaksharaLetters = response.data.filter(l => l.isAvailable == true)
                    this.selectedLetter = this.samyuktaksharaLetters[0]
                    this.getSamyuktakshara(this.selectedLetter)
                })
                .catch(error => {
                    console.log(error);
                });
        },

        getSamyuktakshara(gnLetter) {
            var gnLetterPath = './assets/json/samyuktakshara/'+ gnLetter.key + '.json'
            axios.get(`${this.publicPath}${gnLetterPath}`)
                .then(response => {
                    this.samyuktaksharaChildren = response.data.filter(l => l.isAvailable == true)
                })
        }
    }
}
</script>

<template>
    <div class="body-padding" style="margin: auto;">
        <h2>ಸಂಯುಕ್ತಾಕ್ಷರಗಳು</h2>

        <LetterSelector :jsonData="samyuktaksharaLetters" @eventname="getSamyuktakshara" />

        <LetterFormsDisplay v-for="letter in samyuktaksharaChildren" :selectedLetter="letter" :showImage="true"/>

    </div>
</template>

<style></style>