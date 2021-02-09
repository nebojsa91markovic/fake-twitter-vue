<template>
  <div class="user-profile">
    <div class="user-profile_user-panel">
      <h1 class="user-profile_username">@{{ state.user.username }}</h1>
      <div class="user-profile_user-badge" v-if="state.user.isAdmin">Admin</div>
      <div class="user-profile_user-badge" v-else>Not Admin</div>
      <div class="user-profile_follower-count">
        <strong>Followers: </strong> {{ followers }}
      </div>
      <CreateTwootPanel @add-twoot="addTwoot" />
    </div>
    <div class="user-profile_twoots-wrapper">
      <TwootItem
        class="user-profile_twoots-wrapper"
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.username"
        :twoot="twoot"
        @favorite="toggleFavorite"
      />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import { users } from "../assets/users";
import TwootItem from "@/components/TwootItem";
import CreateTwootPanel from "@/components/CreateTwootPanel";
export default {
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);
    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0],
    });

    const addTwoot = (content) => {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content,
      });
    };

    return {
      state,
      addTwoot,
      userId,
    };
  },

  name: "UserProfile",
  components: {
    TwootItem,
    CreateTwootPanel,
  },
};
</script>

<style scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}

.user-profile_user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
}

h1 {
  margin: 0;
}

.user-profile_user-badge {
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
  margin-right: auto;
  padding: 0 10px;
  font-weight: bold;
}

.user-profile_create-twoot {
  border-top: 1px solid #dfe3e8;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.-exceeded {
  color: red;
  border-color: red;
}

.user-profile_twoots-wrapper {
  display: grid;
  grid-gap: 10px;
}
</style>
