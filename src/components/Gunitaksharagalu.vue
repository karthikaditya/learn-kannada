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
            gunitaksharaLetters: [],
            publicPath: import.meta.env.BASE_URL,
            letters: [
                ""
            ],
            selectedLetter: Object,
            gunitaksharaChildren: []
        }
    },
    mounted() {
        this.fetchData('./assets/json/gunitakshara/letters.json');
    },
    methods: {
        fetchData(jsonPath) {
            axios.get(`${this.publicPath}${jsonPath}`)
                .then(response => {
                    this.gunitaksharaLetters = response.data.filter(l => l.isAvailable == true)
                    this.selectedLetter = this.gunitaksharaLetters[0]
                    // this.getGunitaksharas('./assets/json/gunitakshara/' + this.selectedLetter.key + '.json')
                    this.getGunitaksharas(this.selectedLetter)
                })
                .catch(error => {
                    console.log(error);
                });
        },

        getGunitaksharas(gnLetter) {
            // axios.get(`${this.publicPath}${jsonPath}`)
            var gnLetterPath = './assets/json/gunitakshara/'+ gnLetter.key + '.json'
            axios.get(`${this.publicPath}${gnLetterPath}`)
                .then(response => {
                    this.gunitaksharaChildren = response.data.filter(l => l.isAvailable == true)
                })
        }
    }
}
</script>

<template>
    <div class="body-padding" style="margin: auto;">
        <h2>ಗುಣಿತಾಕ್ಷರಗಳು</h2>

        <!-- <LetterSelector :jsonData="gunitaksharaLetters" v-model:selectedLetter="selectedLetter" /> -->
        <LetterSelector :jsonData="gunitaksharaLetters" @eventname="getGunitaksharas" />

        <LetterFormsDisplay v-for="letter in gunitaksharaChildren" :selectedLetter="letter" />

    </div>
</template>

<style></style>