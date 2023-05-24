<script setup>
import BasicLetter from '../../components/BasicLetter.vue'

</script>

<template>
    <div class="container">
        <div class="left-column">
            <!-- <img :src="`${publicPath}./assets/image1.jpg`" :alt="`Image text`"> -->
            <h2 style="color: red; background-color: yellow; font-size: 64px;">{{ selectedLetter.key }}</h2>
        </div>
        <div class="right-column">
            <!-- <h2>{{ selectedLetter.key }}</h2> -->
            <!-- <p>Description</p> -->

            <div class="card">
                <h2>ಸಾಮಾನ್ಯ ರೂಪಗಳು</h2>

                <div class="flex-container">
                    <div class="flex-item-left">
                        <BasicLetter v-for="letter in selectedLetter.similarForms" :image_src="letter"
                            :showLetterText="false" />
                    </div>

                </div>
            </div>

            <!-- v-if="selectedLetter.similarForms.length > 0"  -->
            <div class="card">
                <h2>ವಿಭಿನ್ನ ರೂಪಗಳು</h2>

                <div class="flex-container">
                    <div class="flex-item-left">
                        <BasicLetter v-for="letter in selectedLetter.differentForms" :image_src="letter"
                            :showLetterText="false" />
                    </div>

                </div>
            </div>



        </div>
    </div>
</template>

<script>
export default {
    props: { selectedLetter: Object },
    data() {
        return {}
    }
}
</script>

<style >
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
</style>