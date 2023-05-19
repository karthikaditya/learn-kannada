<script setup>
import LetterForms from './LetterForms.vue';

</script>

<template>
    <div class="body-padding" style="margin: auto;">
        <h2>ಅಕ್ಷರ ರೂಪಗಳು</h2>

        <LetterForms :jsonPath="`./assets/json/swara.json`"/>
    </div>
</template>

<style></style>