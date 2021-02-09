<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="logo">Twooter</div>
      </router-link>
      <div class="user-profile_user-name" v-if="user">{{ user.username }}</div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "App",
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);

    return {
      user,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

nav {
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 5%;
  background-color: deepskyblue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
}

.logo {
  font-weight: bold;
  font-size: 2.1rem;
  padding-left: 30px;
}

.user-profile_user-name {
  padding-right: 30px;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
