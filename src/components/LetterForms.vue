<script setup>
import axios from 'axios';
import BasicLetter from '../components/BasicLetter.vue'

</script>

<script>


export default {
    props: { title: String, image_src: String, showLetterText: Boolean },
    data() {
        return {
            jsonData: [],
            publicPath: import.meta.env.BASE_URL,
            selectedLetter: '',
            todos: [
                {
                    id: 1,
                    title: 'Do the dishes',
                    src: "image1.jpg",
                },
                {
                    id: 2,
                    src: "image1.jpg",
                    title: 'Take out the trash'
                },
                {
                    id: 3,
                    src: "image1.jpg",
                    title: 'Mow the lawn'
                },
                {
                    id: 1,
                    title: 'Do the dishes',
                    src: "image1.jpg",
                },
                {
                    id: 2,
                    src: "image1.jpg",
                    title: 'Take out the trash'
                },
                {
                    id: 3,
                    src: "image1.jpg",
                    title: 'Mow the lawn'
                },
                {
                    id: 1,
                    title: 'Do the dishes',
                    src: "image1.jpg",
                },
                {
                    id: 2,
                    src: "image1.jpg",
                    title: 'Take out the trash'
                },
                {
                    id: 3,
                    src: "image1.jpg",
                    title: 'Mow the lawn'
                },
                {
                    id: 1,
                    title: 'Do the dishes',
                    src: "image1.jpg",
                },
                {
                    id: 2,
                    src: "image1.jpg",
                    title: 'Take out the trash'
                },
                {
                    id: 3,
                    src: "image1.jpg",
                    title: 'Mow the lawn'
                }
            ],
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
        myMethod(num) {
            this.selectedLetter = this.jsonData.find(a => a.id == num).alphabet
            // alert(num + " image clicked")
        },
        fetchData() {
            axios.get(`${this.publicPath}./assets/json/swara.json`)
                .then(response => {
                    this.jsonData = response.data.letters
                    this.selectedLetter = this.jsonData[0].alphabet

                })
                .catch(error => {
                    console.log(error);
                });
        },
    }
}

</script>

<template>
    <div class="body-padding" style="margin: auto;">
        <h2>ವರ್ಣಮಾಲೆ</h2>

        <div class="flex-container" style="margin: auto; width: 50%;">
            <div class="flex-item-left">
                <div v-for="item in jsonData" :key="item.id" @click="myMethod(item.id)"
                    :style="`display: inline-block; border: 2px solid white; margin: 2px; padding: 5px;`">
                    {{ item.alphabet }}
                </div>

            </div>

        </div>

        <div class="container">
            <div class="left-column">
                <img :src="`${publicPath}./assets/image1.jpg`" :alt="`Image text`">
            </div>
            <div class="right-column">
                <h1>{{ selectedLetter }}</h1>
                <!-- <p>Description</p> -->

                <div class="card">
                    <h2>ಸಾಮಾನ್ಯ ರೂಪಗಳು</h2>

                    <div class="flex-container">
                        <div class="flex-item-left">
                            <BasicLetter v-for="post in todos" :key="post.id" :title="post.title" :image_src="post.src"
                                :showLetterText="false" />
                        </div>

                    </div>
                </div>


                <div class="card">
                    <h2>ವಿಭಿನ್ನ ರೂಪಗಳು</h2>

                    <div class="flex-container">
                        <div class="flex-item-left">
                            <BasicLetter v-for="post in todos" :key="post.id" :title="post.title" :image_src="post.src"
                                :showLetterText="false" />
                        </div>

                    </div>
                </div>



            </div>
        </div>
    </div>
</template>

<style>
.container {
    display: flex;
}

.left-column {
    flex-basis: 40%;
    padding: 20px;
}

.right-column {
    flex-basis: 60%;
    padding: 20px;
}

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