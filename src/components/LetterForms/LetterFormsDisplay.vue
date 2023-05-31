<script setup>
import BasicLetter from '../../components/LetterForms/BasicLetter.vue'

</script>

<template>
    <div class="container">
        <div v-if="showImage" class="left-column">
            <h2 style="color: red; background-color: yellow; font-size: 64px;">{{ selectedLetter.key }}</h2>
        </div>
        <div class="right-column">
            <!-- <h2>{{ selectedLetter.key }}</h2> -->
            <!-- <p>Description</p> -->

            <!-- <div class="card"> -->
            <!-- <h2>ರೂಪಗಳು</h2> -->

            <div v-for="group in groupedLetters" class="flex-container-parent">

                <h2 style="border-bottom: 2px solid red;">{{ getGroupName(group[0]) }}</h2>
                <div class="flex-container">
                    <BasicLetter v-for="letter in group[1]" :image_src="letter.path" :showLetterText="false" />
                </div>
            </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
export default {

    props: { selectedLetter: Object, showImage: Boolean },
    watch: {
        selectedLetter(newValue, oldValue) {
            // console.log('newValue:', newValue, 'previousValue:', oldValue);

            //const uniqueItems = [...new Set(newValue.letterForms.map((item) => item.form))];

            this.groupedLetters = this.groupBy(newValue.letterForms, letter => letter.form);
        },
    },
    data() {
        return {
            groupedLetters: ''
        }
    },
    methods: {
        groupBy(list, keyGetter) {
            const map = new Map();
            list.forEach((item) => {
                const key = keyGetter(item);
                const collection = map.get(key);
                if (!collection) {
                    map.set(key, [item]);
                } else {
                    collection.push(item);
                }
            });
            return map;
        },

        getLetterForForm(formId) {
            return this.groupedLetters.get(formId)
        },

        getGroupName(formId){
            return "ರೂಪ " + formId.substr(-1)
        }

    }, mounted() {

        if (this.selectedLetter !== "") {
            this.groupedLetters = this.groupBy(this.selectedLetter.letterForms, letter => letter.form);
        }
        // let allForms = this.selectedLetter.letterForms.map(letterForm => ({ letterForm: letterForm.form })).flat()
        // let uniqueItems = [...new Set(allForms)]

        // const grouped = groupBy(selectedLetter.letterForms, letter => letter.form);

    }
}
</script>

<style >
.container {
    display: flex;
}

.left-column {
    flex-basis: 20%;
    padding: 20px;
}

.right-column {
    flex-basis: 80%;
    padding: 20px;
}
</style>