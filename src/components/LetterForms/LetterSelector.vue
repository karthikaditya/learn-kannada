<script>

export default {
    props: { jsonData: [] },
    data() {
        return {
            selectedLetter: '',
            underlineFirstLetter: true,
        }
    },
    mounted() {
        if (this.jsonData.length > 0) {
            this.selectedLetter = this.jsonData[0]
        }
    },
    methods: {
        selectLetter(num) {
            this.underlineFirstLetter = false;
            this.selectedLetter = this.jsonData.find(a => a.id == num)
            // this.$emit('update:selectedLetter', this.selectedLetter)
            this.$emit('eventname', this.selectedLetter)
        },
    }
}

</script>

<template>
    <div class="flex-container" style="justify-content: center;">
        <div class="flex-item-left">
            <div v-for="(item, index) in jsonData" :key="item.id" @click="selectLetter(item.id)"
                :class="{ 'red-bottom-border': index === 0 }"
                :style="`display: inline-block; border: 2px solid white; margin: 2px; padding: 5px;`">
                <p :style="[selectedLetter.id === item.id ? { 'border-bottom': '3px solid red' } : {}]"
                    style="font-size: 32px; padding: 5px; cursor: pointer;">{{ item.key }}</p>
            </div>

        </div>

    </div>
</template>

<style>
.red-bottom-border{
    border-bottom: 3px solid red;
}
</style>