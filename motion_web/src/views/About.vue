<template>
  <div class="about">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <Dash msg="Welcome to Your Vue.js App"/> -->
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; 

export default defineComponent({
  name: 'About',
  components: {
    // HelloWorld,
  },
});
</script>
