<script>

export default {
    props: { jsonData: '' },
    data() {
        return {
            selectedLetter: '',
        }
    },
    created() {
        // the prop needs to be re-assigned here. Vue doesn't like prop mutation
        // this.selectedLetter = this.selectedLetter
    },
    methods: {
        selectLetter(num) {
            this.selectedLetter = this.jsonData.find(a => a.id == num)
            // this.$emit('update:selectedLetter', this.selectedLetter)
            this.$emit('eventname', this.selectedLetter)
        },
    }
}

</script>

<template>
    <div class="flex-container" style="justify-content: center;">
        <!-- margin: auto; width: 50%;  -->
        <div class="flex-item-left">
            <div v-for="item in jsonData" :key="item.id" @click="selectLetter(item.id)"
                :style="`display: inline-block; border: 2px solid white; margin: 2px; padding: 5px;`">
                <p :style="[selectedLetter.id === item.id ? { 'border-bottom': '3px solid red' } : {  }]"
                    style="font-size: 32px; padding: 5px; cursor: pointer;">{{ item.key }}</p>
            </div>

        </div>

    </div>
</template>