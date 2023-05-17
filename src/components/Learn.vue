<script setup>

import ImageFlipCard from '../components/ImageFlipCard.vue'
import BasicLetter from '../components/BasicLetter.vue'

</script>

<template>
    <div class="body-padding">
        <h2>ವರ್ಣಮಾಲೆ</h2>
        <p>ಕನ್ನಡವನ್ನು ಹಿಂದೆ ಕೆನರೀಸ್ ಎಂದೂ ಕರೆಯಲಾಗುತ್ತಿತ್ತು, ಇದು ನೈಋತ್ಯ ಭಾರತದ ಕರ್ನಾಟಕದ ಜನರು ಪ್ರಧಾನವಾಗಿ ಮಾತನಾಡುವ ದ್ರಾವಿಡ
            ಭಾಷೆಯಾಗಿದೆ.</p>

        <div class="card">
            <h2>ಸ್ವರಗಳು</h2>

            <div class="flex-container">
                <div class="flex-item-left">
                    <BasicLetter v-for="post in todos" :key="post.id" :title="post.title" :image_src="post.src" :showLetterText="true"/>
                </div>

            </div>
        </div>

        <div class="card">
            <h2>ವರ್ಗೀಯ ವ್ಯಂಗನಗಳು</h2>

            <div class="flex-container">
                <div class="flex-item-left">
                    <BasicLetter v-for="post in todos" :key="post.id" :title="post.title" :image_src="post.src" :showLetterText="true"/>
                </div>

            </div>
        </div>

        <div class="card"  >
            <h2>ಅವರ್ಗೀಯ ವ್ಯಂಗನಗಳು</h2>

            <div class="flex-container" style="border: 2px solid white;">
                <div class="flex-item-left">
                    <BasicLetter v-for="post in todos" :key="post.id" :title="post.title" :image_src="post.src" :showLetterText="false"/>
                </div>

            </div>
        </div>

        
    </div>
    <!-- <div class="row">
        <div class="leftcolumn">
            <div class="card">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.</p>

                <div class="letter-row">
                    <div class="column">
                        <BasicLetter v-for="post in todos" :key="post.id" :title="post.title" :image_src="post.src" />
                    </div>
                    <div class="column">
                        <BasicLetter v-for="post in todos" :key="post.id" :title="post.title" :image_src="post.src" />
                    </div>
                </div>

            </div>
            <div class="card">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Sep 2, 2017</h5>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.</p>

                <ImageFlipCard v-for="(todo, index) in todos" :key="todo.id" :title="todo.title" :style="{
                    'display': flex,
                    'flex-direction': row,
                    'flex-wrap': wrap,
                    'justify-content': 'space-between'
                }" />

            </div>
        </div>
    </div> -->
</template>

<script>
export default {
    data() {
        return {
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
            methods: {
                getFilesInFolder() {
                    const fonts = import.meta.glob('@/assets/*.jpg')
                    console.log(fonts)
                    return fonts
                }
            }
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

.letter-row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
}

.column {
    flex: 25%;
    max-width: 15%;
    padding: 0 4px;
}

.column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
    float: left;
    /* width: 75%; */
}

/* Right column */
.rightcolumn {
    float: left;
    width: 25%;
    background-color: #f1f1f1;
    padding-left: 20px;
}

/* Fake image */
.fakeimg {
    background-color: #aaa;
    width: 100%;
    padding: 20px;
}

/* Clear floats after the columns */
.row::after {
    content: "";
    display: table;
    clear: both;
}
</style>