<template>
  <div>
    <Header></Header>
    <div class="profile">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>This is an profile page</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/partials/Header.vue";
export default {
  name: 'Profile',
  components: {
    Header
  }
}
</script>

<style scoped>
/* profile */
.profile {
  padding: 2rem 0;
}
</style>