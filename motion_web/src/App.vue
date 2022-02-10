<template>
  <div id="app">
    <Header></Header>
    <router-view/>
		<Footer></Footer> 
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { defineComponent } from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default defineComponent({
  name: 'About',
  components: {
    Header,
    Footer,
  },
  // setup() {
  //   const handleBlur = (event: Event) => {
  //     const target = event.target as HTMLInputElement;
  //     target.style.borderColor = target.value
  //       ? "rgba(229,231,235, 1)"
  //       : "rgba(255, 0, 0, 1)";
  //   };

  //   return { handleBlur };
  // },
});
</script>

<style>
*,
::after,
::before,
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: xx-small;
}
/* #nav {
  padding: 30px;
} */
#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
}
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.form--container {
  width: 100%;
  margin: 50px auto;
}
.form--title {
  text-align: center;
  margin: 2rem 0;
}
.validations {
  display: flex;
  justify-content: center;
  color: #ff0000;
  padding: 0.5rem;
  border-radius: 5px;
}
.form--item {
  display: flex;
  flex-direction: column;
  border: none;
  margin: 0px 0px 20px;
  padding: 0px;
}
.form--label {
  font-size: 14px;
  color: rgb(61, 79, 88);
  position: relative;
  height: 16px;
  /*width: 36px;*/
  text-align: left;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.02em;
}
.form--input {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 4px;
  height: 52px;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  margin-top: 5px;
  padding-left: 12px;
  padding-right: 12px;
  transition: border-color 150ms ease-in-out 0s;
}
.form--button {
  position: relative;
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  -webkit-box-align: stretch;
  height: 45px;
  width: 100%;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 5px;
  border-radius: 4px;
  border-color: transparent;
  text-decoration: none;
  cursor: not-allowed;
  z-index: 0;
  /* appearance: none; */
  transition: all 150ms ease-in-out 0s;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
}
.form--button.isValid {
  cursor: pointer;
  background-color: #42b983;
}
.form--button.isValid:hover {
  opacity: 0.5;
}
/* mini */
@media only screen and (min-width: 481px) {
  #app {
    font-size: initial;
  }
  .form--container {
    width: 410px;
    margin: 0 auto;
  }
}
/* max */
@media only screen and (min-width: 981px) {
}
</style>
