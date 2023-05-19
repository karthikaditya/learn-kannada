<script setup>
import LetterForms from './LetterForms.vue';

</script>

<template>
    <div class="body-padding" style="margin: auto;">
        <h2>ಸಂಖ್ಯೆಗಳು</h2>

        <LetterForms :jsonPath="`./assets/json/numbers.json`" />
    </div>
</template>

<style></style>