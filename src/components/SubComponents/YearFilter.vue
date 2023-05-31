<template>
    <div>
        <label for="from-year" style="color: black;">ವರ್ಷದಿಂದ:</label>
        <input type="number" id="from-year" name="from-year" :min="minYear" :max="maxYear" :step="stepYear" v-model="fromYear">

        <label for="to-year" style="color: black;">ವರ್ಷದವರೆಗೆ:</label>
        <input type="number" id="to-year" name="to-year" :min="minYear+stepYear" :max="maxYear" :step="stepYear" v-model="toYear">

        <div>
            <button @click="passData()">
                ಫಿಲ್ಟರ್
            </button>

            <button @click="resetData()">
                ರೆಸೆಟ್
            </button>
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            minYear: 1300,
            maxYear: 1400,
            stepYear: 20,
            fromYear: 1300,
            toYear: 1400
        }
    },
    watch: {
        fromYear(newValue) {
            if (newValue >= this.toYear) {
                this.toYear = newValue + this.stepYear;
            }
        },
        toYear(newValue) {
            if (newValue <= this.fromYear) {
                this.fromYear = Math.max(newValue - this.stepYear, this.minYear);
            }

            // if (newValue <= this.fromYear || newValue === this.fromYear + 50) {
            //     this.fromYear = newValue - 50;
            // }
        }
    }, methods: {
        passData() {
            this.$emit('yearData', { fromYear: this.fromYear, toYear: this.toYear });
        },
        resetData(){
            this.$emit('yearData', { fromYear: this.minYear, toYear: this.maxYear });
        }
    },
}

</script>
  