<script setup>
import { VueFlip } from 'vue-flip';
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

// export default {
// 	props: ['title'],
// }

</script>
<template>
    <vue-flip active-click="true" width="200px" height="50px">
        <template v-slot:front class="front" #icon>
            <!-- <CommunityIcon /> -->
            <img alt="Vue logo" class="logo" src="../assets/image1.jpg" width="125" height="125" />

        </template>
        <template v-slot:back class="back" #icon>
            <!-- <SupportIcon/> -->
            <img alt="Vue logo" class="logo" src="../assets/image2.jpg" width="125" height="125" />

        </template>
    </vue-flip>
</template>