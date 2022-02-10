<template>
  <div class="profile">
    <form class="form--container" @submit.prevent="handleCreate">
      <div class="form--header">
        <h2 class="form--title">Add Investor</h2>
      </div>
      <div v-if="!!validations.length" class="validations">
        <ul style="text-align: left;"><li style="list-style-type: disc;" v-for="(validation, index) in validations" :key="index">{{validation}}</li></ul>
      </div>
      <div class="form--item">
        <label class="form--label" for="username">Username: </label>
        <input class="form--input" type="text" name="username" id="username" v-model="username" @blur="handleBlur($event)" placeholder="Enter username" required />
      </div>
      <div class="form--item" v-if="isValid">
        <button class="form--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit">Add Investor</button>
      </div>
    </form>
    <h1>Investors</h1>
    <div class="profile--item" v-for="username in usernames" :key="username.id">
      <div>{{ username.username }} - Joined: {{ new Date(username.created_at).toDateString() }}</div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import { v4 as uuid } from 'uuid';
import { useStore } from "vuex";
import Username from '@/types/Username';
export default defineComponent({
  name: 'Profile',
  components: {
  },
  setup() {
    const store = useStore();
    const getUsernames = () => store.dispatch('getUsernames');
    const addUsername = (username: Username) => store.dispatch('addUsername', username);
    onMounted(async () =>  await getUsernames());
    const username = ref("");
    let validations = reactive<string[]>([]);
    const isValid = computed(() => username.value !== "");
    const profile = computed(() => store.getters.profile);
    const usernames = computed((): Username => store.getters.usernames);
    const handleBlur = (event: Event) => {
      const target = event.target as HTMLInputElement;
      target.style.borderColor = target.value
        ? "rgba(229,231,235, 1)"
        : "rgba(255, 0, 0, 1)";
    };
    const handleCreate = async () => {
      await addUsername({
        id: uuid(),
        username: username.value,
        created_at: Date.now(),
        updated_at: Date.now(),
      });
      username.value = '';
    };

    return { profile, usernames, username, validations, isValid, handleBlur, handleCreate };
  },
});
</script>

<style scoped>
/* profile */
.profile {
  padding: 2rem;
  height: 100%;
  min-height: 100vh;
}
.profile--item {
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 0 1.5px rgb(0 0 0 / 2%), 0 0 3.6px rgb(0 0 0 / 3%), 0 0 6.8px rgb(0 0 0 / 4%), 0 0 12.1px rgb(0 0 0 / 4%), 0 0 22.6px rgb(0 0 0 / 5%), 0 0 54px rgb(0 0 0 / 7%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.profile--item:hover {
  box-shadow: 0 2.3px 1.5px rgb(0 0 0 / 2%), 0 5.8px 3.7px rgb(0 0 0 / 3%), 0 11.9px 7.6px rgb(0 0 0 / 4%), 0 24.5px 15.7px rgb(0 0 0 / 5%), 0 67px 43px rgb(0 0 0 / 7%);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
/* max */
@media only screen and (min-width: 981px) {
  .profile--item {
    width: 410px;
    margin: 2rem auto;
  }
}
</style>