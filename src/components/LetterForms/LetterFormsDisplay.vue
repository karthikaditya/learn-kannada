<script setup>
import BasicLetter from '../../components/LetterForms/BasicLetter.vue'
import { getFileNameFromPath } from '../../models/utils';

</script>

<template>
    <div class="container">
        <div v-if="showImage" class="left-column">
            <h2 style="color: red; background-color: yellow; font-size: 64px;">{{ selectedLetter.key }}</h2>
        </div>
        <div class="right-column">
            <div v-if="groupedLetters.size > 0">

                <div v-for="group in groupedLetters" class="flex-container-parent">

                    <h2 style="border-bottom: 2px solid red;">{{ getGroupName(group[0]) }}</h2>
                    <div class="flex-container">
                        <BasicLetter v-for="letter in group[1]" :image_src="letter.path" :showLetterText="false" />
                    </div>

                </div>
            </div>
            <div v-else>
                <h2>ಈ ಅವಧಿಯಲ್ಲಿ ಯಾವುದೇ ಅಕ್ಷರಗಳು ಲಭ್ಯವಿಲ್ಲ</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: { selectedLetter: String, showImage: Boolean, yearData: String },
    watch: {
        selectedLetter(newValue, oldValue) {
            // console.log('newValue:', newValue, 'previousValue:', oldValue);
            //const uniqueItems = [...new Set(newValue.letterForms.map((item) => item.form))];

            this.applyYearFilter(newValue.letterForms, this.yearData);
        },
        yearData(newValue, oldValue) {
            this.applyYearFilter(this.selectedLetter.letterForms, newValue);
        }
    },
    data() {
        return {
            groupedLetters: []
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

        getGroupName(formId) {
            return "ರೂಪ " + formId.substr(-1)
        },

        getYear(filePath) {
            let fileName = getFileNameFromPath(filePath);
            let indx = fileName.indexOf("_");
            let imageYear = new Date().getFullYear();

            if (indx !== -1) {
                imageYear = fileName.substring(0, indx);
            }
            return imageYear
        },

        getGroupedForms(letterForms) {
            this.groupedLetters = this.groupBy(letterForms, letter => letter.form);
        },
        applyYearFilter(letterForms, yearData) {

            if (yearData !== "") {
                let filteredData = letterForms.map(l => {
                    return {
                        form: l.form,
                        path: l.path,
                        year: this.getYear(l.path)
                    };
                }).filter(l => l.year >= yearData.fromYear & l.year <= yearData.toYear);

                this.getGroupedForms(filteredData);
            } else {
                this.getGroupedForms(letterForms);
            }
        }


    }, mounted() {

        if (this.selectedLetter !== "") {
            this.getGroupedForms(this.selectedLetter.letterForms)
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