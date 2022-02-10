<template>
	<div class="header--wrapper">
		<header class="header">
      <nav class="nav" id="nav">
        <ul class="nav--list">
          <li class="nav--item logo">
            <router-link class="nav--link" to="/">
              <svg class="logo--icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
              </svg>
            </router-link>
          </li>
          <li class="nav--item" v-if="profile">
            <router-link class="nav--link" to="/">{{role}} Dashboard</router-link>
          </li>
          <li class="nav--item profile" v-if="profile">
            <div style="width: 3rem;">
              <svg class="profile--icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="profile--content">
              <router-link class="nav--link profile--link link--item" to="/profile">Profile</router-link>
              <a class="nav--link link--item" href="http://pay.motion.com" target="_blank">Pay</a>
              <a class="nav--link link--item" href="http://doc.motion.com" target="_blank">Docs</a>
              <router-link class="nav--link link--item" :to="{ name: 'Login' }" @click.prevent="handleLogout">Logout</router-link>
            </div>
          </li>
        </ul>
      </nav>
		</header>
	</div>
</template>

<script lang="ts">
// @ is an alias to /src
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
  name: "Header",
  setup() {
    const store = useStore();
    const router = useRouter()
    const route = useRoute();
    const setProfile = (profile: boolean) => store.dispatch('setProfile', profile);
    const setRole = (role: string) => store.dispatch('setRole', role);
    const profile = computed(() => store.getters.profile);
    const role = computed(() => store.getters.role);
    const handleLogout = async () => {
      try {
        await setProfile(false);
        await setRole("")
        localStorage.removeItem('profile');
        localStorage.removeItem('role');
        if (route.path != '/login') {
          router.push("/login");
        }
        // router.push({ name: "Login" });
      } catch (error) {
        console.log(error);
        // this.setMessage({ text: error.message, status: false });
      }
    };

    return { profile, role, handleLogout };
  },
});
</script>

<style>
.header {
  margin: 0;
  padding: 0;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
#nav {
  padding: 10px;
  color: #42b983;
}
.nav .nav--list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;
  width: 100%;
}
.nav .nav--item {
  list-style-type: none;
  margin-left: 1rem;
}
.nav--item .nav--link {
  color: #036438;
  color: #42b983;
  text-decoration: underline;
}
.nav--item .nav--link:hover {
  color: #42b983;
  color: #036438;
}
.nav--item.logo {
  flex: auto;
  display: flex;
}
.logo--icon {
  width: 2rem;
  height: 2rem;
  color: #42b983;
}
.link--item {
  padding: 8px 16px;
  color: #42b983;
}
.link--item:hover {
  color: #036438;
}
/* profile */
.profile {
  position: relative;
}
.profile--icon {
  width: 2rem;
  height: 2rem;
  color: #42b983;
}
.profile--content {
  display: none;
  flex-direction: column;
  position: absolute;
  color: #42b983;
  min-width: max-content;
  z-index: 1;
  background-color: #f5f5f5;
}
.profile:hover .profile--content {
  display: flex;
  left: -10px;
}
.profile:hover .profile--content > .link--item:hover  {
  background-color: #ffffff;
}
/* .profile--content:hover .profile--link:hover {
  color: #42b983;
} */

/* mini */
@media only screen and (min-width: 481px) {
  .nav .nav--item {
    list-style-type: none;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .nav .nav--list {
    margin-left: auto;
    margin-right: auto;
    margin-top: 0rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .logo--icon {
    width: 5rem;
    height: 5rem;
  }
}
/* max */
@media only screen and (min-width: 981px) {
  .nav .nav--list {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0rem;
  }
  .logo--icon {
    width: 5rem;
    height: 5rem;
  }
  .profile--icon {
    width: 4rem;
    height: 4rem;
    color: #42b983;
  }
  .profile:hover .profile--content {
    display: flex;
    background-color: #f5f5f5;
    left: -10px;
  }
}
</style>