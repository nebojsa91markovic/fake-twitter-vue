<template>
  <form
    class="user-profile_create-twoot"
    @submit.prevent="createNewTwoot"
    :class="{ '-exceeded': newTwootCharacterCount > 180 }"
  >
    <div class="user-profile_new-twoot-area">
      <label for="newTwoot"
        ><strong>New Twoot: </strong>({{ newTwootCharacterCount }}/180)</label
      >
      <textarea
        id="newTwoot"
        cols="40"
        rows="5"
        v-model="state.newTwootContent"
      />
    </div>

    <div class="user-profile_create-twoot-type">
      <label for="newTwootType">
        <strong>Type: </strong>
      </label>
      <select id="newTwootType" v-model="state.selectedTwootType">
        <option
          :value="option.value"
          v-for="(option, index) in state.twootTypes"
          :key="index"
        >
          {{ option.name }}
        </option>
      </select>
    </div>

    <button type="submit">Twoot!</button>
  </form>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CreateTwootPanel",
  setup(props, ctx) {
    //wrap it in reactive for state
    const state = reactive({
      newTwootContent: "",
      selectedTwootType: "instant",
      twootTypes: [
        { value: "draft", name: "Draft" },
        { value: "instant", name: "Instant Twoot" },
      ],
      followers: 0,
    });

    //computed need to wrapped in computed
    const newTwootCharacterCount = computed(() => state.newTwootContent.length);

    //methods write like functions
    const createNewTwoot = () => {
      if (state.newTwootContent && state.selectedTwootType !== "draft") {
        ctx.emit("add-twoot", state.newTwootContent);

        state.newTwootContent = "";
      }
    };

    return {
      state,
      newTwootCharacterCount,
      createNewTwoot,
    };
  },
};
</script>

<style scoped>
.user-profile_create-twoot {
  margin-top: 20px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
}

.--exceeded {
  color: red;
  border-color: red;
}

#newTwoot {
  padding: 10px 0;
}

.user-profile_create-twoot-type {
  padding: 10px 0;
}

button {
  padding: 5px 20px;
  margin: auto 0;
  border-radius: 5px;
  border: none;
  background-color: deepskyblue;
  color: white;
  font-weight: bold;
}

.user-profile_create-twoot textarea {
  border: 1px solid #dfe3e8;
  border-radius: 5px;
}
</style>
