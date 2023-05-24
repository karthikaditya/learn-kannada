<script setup>
import axios from 'axios';
import LetterFormsDisplay from './LetterForms/LetterFormsDisplay.vue';
import LetterSelector from './LetterForms/LetterSelector.vue'

</script>

<script>


export default {
    props: { jsonPath: String },
    data() {
        return {
            jsonData: [],
            publicPath: import.meta.env.BASE_URL,
            selectedLetter: '',
        }
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        filteredData() {
            return this.jsonData;//.filter(item => item.name.toLowerCase().includes(this.filterText.toLowerCase()));
        }
    },
    methods: {
        fetchData() {
            axios.get(`${this.publicPath}${this.jsonPath}`)
                .then(response => {
                    this.jsonData = response.data.filter(l => l.isAvailable == true)
                    this.selectedLetter = this.jsonData[0]

                })
                .catch(error => {
                    console.log(error);
                });
        },

        updateLetter(variable) {
            this.selectedLetter = variable
        }
    }
}

</script>

<template>
    <div class="body-padding" style="margin: auto;">

        <LetterSelector :jsonData="jsonData" @eventname="updateLetter" />

        <LetterFormsDisplay :selectedLetter="selectedLetter" />
    </div>
</template>

<style>
img {
    max-width: 100%;
}

h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

p {
    font-size: 16px;
}
</style>