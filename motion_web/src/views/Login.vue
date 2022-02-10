<template>
  <div class="login">
    <form class="form--container" @submit.prevent="handleLogin">
      <div class="form--header">
        <h2 class="form--title">Log in to your account</h2>
      </div>
      <div v-if="!!validations.length" class="validations">
        <ul style="text-align: left;"><li style="list-style-type: disc;" v-for="(validation, index) in validations" :key="index">{{validation}}</li></ul>
      </div>
      <div class="form--item">
        <label class="form--label" for="email">Email: </label>
        <input class="form--input" type="email" name="email" id="email" v-model="user.email" @blur="handleBlur($event)" placeholder="Enter your email" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="password">Password: </label>
        <input class="form--input" type="password" name="password" id="password" v-model="user.password" @blur="handleBlur($event)" placeholder="Enter your password" required />
      </div>
      <div class="form--item">
        <label class="form--label" for="role">Role: </label>
        <select v-model="user.role" name="role" id="role" ref="role" class="form--input">
          <option value="" selected disabled>Select role</option>
          <option v-for="(role, index) in roles" :value='role' :key="index">{{ role }}</option>
        </select>
      </div>
      <div class="form--item">
        <button class="form--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { computed, defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
export default defineComponent({
  name: "Login",
  components: {
  },
  setup() {
    const store = useStore();
    // const route = useRoute();
    const router = useRouter()
    const setProfile = (profile: boolean) => store.dispatch('setProfile', profile);
    const setRole = (role: string) => store.dispatch('setRole', role);
    let validations = reactive<string[]>([]);
    const roles = reactive(["Sales", "Services", "Engineering", "Finance", "Operations", "Marketing", "Legal", "Sourcing", "Recruiting", "Audit", "Compliance"]);
    const user = reactive({
      email: '',
      password: "",
      role: '',
    });
    const isValid = computed(() => {
      return user.email !== "" && user.password !== "" && user.role !== "";
    });
    const handleBlur = (event: Event) => {
      const target = event.target as HTMLInputElement;
      target.style.borderColor = target.value
        ? "rgba(229,231,235, 1)"
        : "rgba(255, 0, 0, 1)";
    };
    const handleValidation = (): boolean => {
      validations = [];
      if (!user.email) {
        validations.push("Email is required!");
      }
      if (!user.password) {
        validations.push("Password is required!");
      }
      if (!user.role) {
        validations.push("Role is required!");
      }
      setTimeout(() => (validations = []), 5000);
      // If No Errors Return True
      if (validations.length) return false;
      return true;
    };
    const handleLogin = async () => {
      if (!handleValidation()) return;
      try {
        await setProfile(true);
        await setRole(user.role)
        localStorage.setItem('profile', "true");
        localStorage.setItem('role', user.role);
        router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    };

    return { validations, roles, user, isValid, handleBlur, handleValidation, handleLogin };
  },
});
</script>

<style scoped>
/* login */
.login {
  padding: 1rem;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 500ms linear;
}

/* mini */
@media only screen and (min-width: 481px) {
}
/* max */
@media only screen and (min-width: 981px) {
}
</style>