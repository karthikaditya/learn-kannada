<script setup>
import { getFileNameFromPath } from '../../models/utils';
</script>

<script>

export default {
    props: { title: String, image_src: String, showLetterText: Boolean, imageSizePx: Number },
    watch: {
        image_src(newValue, oldValue) {
            this.fileName = getFileNameFromPath(newValue)
        }
    },
    data() {
        return {
            publicPath: import.meta.env.BASE_URL,
            imagesFolder: "1300-1400_Kannada_Characters",
            fileName: ''
        }
    }, methods: {
        letterClicked(num) {
            //alert(num + " image clicked")
        }
    }, mounted() {
        this.fileName = getFileNameFromPath(this.image_src)
    }
}

</script>

<template>
    <div :style="`display: inline-block; margin: 2px; box-shadow: 5px 5px 5px gray; width: ${imageSizePx}px;`">
        <!-- border: 2px solid lightgray; -->
        <p v-if="showLetterText">{{ title }}</p>
        <img :src="`${publicPath}./assets/${imagesFolder}/${image_src}`" :alt="`Image text`" :style="`max-height: 250px;
    max-width: 100px; display: block; width: 100%;height: ${imageSizePx}px;object-fit: fill;`"
            @click="letterClicked(`${image_src}`)" :title="`${fileName}`">
    </div>

    <!-- <div class="container">
        <img :src="`${publicPath}./assets/${image_src}`" alt="Snow" style="width:100%;">
        <div class="bottom-left">Bottom Left</div>
        <div class="top-left">Top Left</div>
        <div class="top-right">Top Right</div>
        <div class="bottom-right">Bottom Right</div>
        <div class="centered">Centered</div>
    </div> -->
</template>

<style>
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

.content {
    /* width: 400px; */
    /* border: 4px solid red; */
    padding: 5px;
    overflow: hidden;
}

.content img {
    margin-right: 15px;
    float: left;
}

.content h3,
.content p {
    margin-left: 15px;
    display: block;
    margin: 2px 0 0 0;
}

/* Container holding the image and the text */
.container {
    position: relative;
    text-align: center;
    color: white;
}

/* Bottom left text */
.bottom-left {
    position: absolute;
    bottom: 8px;
    left: 16px;
}

/* Top left text */
.top-left {
    position: absolute;
    top: 8px;
    left: 16px;
}

/* Top right text */
.top-right {
    position: absolute;
    top: 8px;
    right: 16px;
}

/* Bottom right text */
.bottom-right {
    position: absolute;
    bottom: 8px;
    right: 16px;
}

/* Centered text */
.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>