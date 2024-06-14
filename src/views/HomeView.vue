<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <router-link to="/about">Go About</router-link>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
    name: 'HomeView',
    components: {
        HelloWorld,
    },
});
</script>
